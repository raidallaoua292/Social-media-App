// import axios from 'axios'; // Add import statement for axios



// import { Collapse, Dropdown, initTE, } from
// "tw-elements"; initTE({ Collapse, Dropdown });

// import { Modal } from "../../node_modules/tw-elements/dist/js/tw-elements.es.min.js";    // Add import statement for Modal
setupUI();

const baseUrl = "https://tarmeezacademy.com/api/v1";
// GET Posts from API 
if (window.location.pathname === "/public/index.html" || window.location.pathname === "/") {
    getPosts();
}
if (window.location.pathname === "/public/post.html") {
    console.log("post.html");
    getPost();
}
 console.log(window.location.pathname);


// login btn 
document.getElementById("login_btn").addEventListener("click", loginBtnClicked);

function loginBtnClicked() {
    console.log("loginBtnClicked function started");

    let userName = document.getElementById("username").value;
    let psw = document.getElementById("password").value;
    const params = {
        "username": userName,
        "password": psw
    };

    axios.post(`${baseUrl}/login`, params)
        .then((response) => {
            console.log(response.status);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            // hide modal
            hideModal(document.getElementById("loginModalVarying"));
            // alert
            console.log("Before showAlert");
            showAlert("You are login successfully", "success");
            setupUI();
            console.log("After showAlert");
        })
        .catch((error) => {
            console.log(error.response.data);

            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });
    console.log(userName);
    console.log("loginBtnClicked function ended");
}



// singup btn
document.getElementById("singup_btn").addEventListener("click", singupBtnClicked);

function singupBtnClicked() {
    let userName = document.getElementById("singup_username").value;
    let email = document.getElementById("singup_email").value;
    let psw = document.getElementById("singup_password").value;
    let name = document.getElementById("singup_name").value;
    let image = document.getElementById("singup_image").files[0];

    const formData = new FormData();
    formData.append("username", userName);
    formData.append("email", email);
    formData.append("password", psw);
    formData.append("name", name);
    formData.append("image", image);

    

    axios.post(`${baseUrl}/register`, formData)
        .then((response) => {
            console.log(response.status);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            // hide modal
            hideModal(document.getElementById("singupModalVarying"));
            // alert 
            showAlert("You are singup successfully", "success");
            setupUI();
        })
        .catch((error) => {
            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });
    console.log(userName);
}

/*  logout btn  */
document.getElementById("logout").addEventListener("click", logoutBtnClicked);

function logoutBtnClicked() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setupUI();
    console.log("logoutBtnClicked function ended");
}

/*  add post btn  */
document.getElementById("add_post_btn").addEventListener("click", addPostBtnClicked);
document.getElementById("edit_post_btn").addEventListener("click", editPostClickd);


// conferm delete post btn
document.getElementById("delete_post_btn").addEventListener("click", confermDeletePostBtnClicked);


function addPostBtnClicked() {
    const token = localStorage.getItem("token");
    const title = document.getElementById("post_title").value;
    const body = document.getElementById("post_description").value;
    const image = document.getElementById("post_image").files[0];
    let formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);
    
    const config = {
        headers: {
            contentType: "multipart/form-data",
            Authorization: `Bearer ${token}`
        }
    };
    axios.post(`${baseUrl}/posts`, formData, config)
        .then((response) => {
            console.log(response.status);
            // hide modal
            hideModal(document.getElementById("addPostModalVarying"));
            // alert 
            showAlert("You are add post successfully", "success");

            getPosts();
        })
        .catch((error) => {
            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });
}

function editPostClickd() {
    let postId = document.getElementById("edit_post_id").value;

    const token = localStorage.getItem("token");
    const title = document.getElementById("edit_post_title").value;
    const body = document.getElementById("edit_post_description").value;
    const image = document.getElementById("edit_post_image").files[0];
    let formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);
    formData.append("_method", "PUT");
    
    const config = {
        headers: {
            contentType: "multipart/form-data",
            Authorization: `Bearer ${token}`
        }
    };
    axios.post(`${baseUrl}/posts/${postId}`, formData, config)
        .then((response) => {
            console.log(response.status);
            // hide modal
            hideModal(document.getElementById("editPostModalVarying"));
            // alert 
            showAlert("You are edit post successfully", "success");

            getPosts();
        })
        .catch((error) => {
            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });

}
/* infinte scroling  */
let currentPage = 1;
let lastPage = 1;
window.addEventListener("scroll", () => {
    const endOfPage = document.documentElement.scrollHeight - window.innerHeight === window.scrollY;
    if (endOfPage && currentPage < lastPage ){
        console.log("endOfPage");
        currentPage = currentPage + 1;
        getPosts(false ,currentPage);
        console.log(currentPage);
    }
});
    

/* ---------  function ------- */

/**
 * Retrieves posts from the server and renders them on the page.
 */
function getPosts(reload =true, page = 1) {
    axios.get(`${baseUrl}/posts?limit=8&page=${page}`)
    .then((response) => {
        let posts = response.data.data;
        console.log(posts);
        if (reload){
            document.getElementById("posts").innerHTML = "";
        }
        lastPage = response.data.meta.last_page;
        posts.forEach(post => {
            console.log(post);

            let postTitle = "";
            if (post.title != null) {
                postTitle = post.title;
            }
            const author = post.author;
            let user = getCurentUser();
            let isMyPost = user != null && user.id === author.id ? true : false;
            let buttonContent = "";
            if (isMyPost) {
                buttonContent = `
                <button 
                            data-te-toggle="modal"
                            data-te-target="#editPostModalVarying"
                            data-te-whatever="@mdo"
                            onclick="editPostBtnClickd('${encodeURIComponent(JSON.stringify(post))}')" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-primary-600" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                            </svg> 
                            
                </button>
                <button 
                            data-te-toggle="modal"
                            data-te-target="#deletePostModalVarying"
                            data-te-whatever="@mdo"
                            onclick="deletPostBtnClickd('${encodeURIComponent(JSON.stringify(post))}')" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-danger-600" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                            </svg>
                </button>
                `
            }
            console.log(postTitle);

            let content = `
                <div id="${post.id}"
                    class="block mb-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-primary-700">
                    <div class="flex items-center justify-between border-b-2 px-6 py-3">
                        <div class="flex gap-1 dark:border-primary-600 dark:text-primary-50">
                            <img src="${post.author.profile_image}"
                                class="w-6 rounded-full"
                                alt="" />
                            <span class="text-primary-700 font-bold">@${post.author.username}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            ${buttonContent}
                        </div>
                    </div>
                    <div class = "post_body cursor-pointer" onclick="window.location.href = 'post.html?id=${post.id}'">
                        <div class=" relative p-6 pb-0 overflow-hidden bg-cover bg-no-repeat">
                            <img class="rounded-lg w-full"
                                src=${post.image}
                                alt="" />
                            <p class="text-base text-primary-600 dark:text-primary-200">
                                <small class="text-primary-500 dark:text-primary-400">${post.created_at}</small>
                            </p>
                        </div>
                        <div class="px-6 ">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-primary-800 dark:text-primary-50">
                                ${post.title}
                            </h5>
                            <p class="mb-4 text-base text-primary-700 dark:text-primary-200">
                                ${post.body}
                            </p>
                        </div>
                    </div>
                    <div class="border-t-2 flex items-center gap-2 flex-wrap px-6 py-3 text-primary-700 ">
                        <div class="cursor-pointer">
                            <i class="fa-regular fa-comment"></i>
                            <span>
                                ${post.comments_count} comments
                            </span>
                        </div>
                        <div id="post_tags_${post.id}" class="flex gap-2 flex-wrap">

                        </div>
                    </div>
                </div>
            `;
            const tags = post.tags;
            document.getElementById("posts").innerHTML += content;
            const currentPostTagsId = `post_tags_${post.id}`;
            document.getElementById(currentPostTagsId).innerHTML = "";

            for (const tag of tags) {
                document.getElementById(currentPostTagsId).innerHTML += `
                    <button id=""
                        type="button"
                        class="inline-block rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                        ${tag.name}
                    </button>
                `;
            }
        });
    });
}

function hideModal(params) {
    params.style.display = "none";

    params.setAttribute("aria-hidden", true);
    params.removeAttribute("aria-modal");
    params.removeAttribute("role");
    params.removeAttribute("data-te-open");
    document.body.style = "";
    document.body.removeAttribute("data-te-modal-open");
    document.querySelector(".undefined").remove();

}

function setupUI() {
    const token = localStorage.getItem("token");

    const login = document.getElementById("login");
    const singup = document.getElementById("singup");
    const profile_login = document.getElementById("profile_login");
    const logout = document.getElementById("logout");
    const postAddBTN = document.getElementById("add-post-btn");
    const profileImage = document.querySelector("#profile_login img");
    const profileName = document.querySelector("#profile_login span");
    
    if (token === null) {
        logout.style.display = "none";
        profile_login.style.display = "none";
        postAddBTN.style.display = "none";
        login.style.display = "";
        singup.style.display = "";
    } else {
        login.style.display = "none";
        singup.style.display = "none";
        postAddBTN.style.display = "";
        profile_login.style.display = "";
        logout.style.display = "";
        profileImage.src = getCurentUser().profile_image;
        profileName.textContent = getCurentUser().username;
    }
}

function showAlert(content, type) {
    let alertcontent = `
        <div class="bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-3 fixed bottom-10 right-0 -translate-y-[90%] z-[1100]  inline-flex w-fit items-center justify-center flex-wrap rounded-lg bg-success-100sm:px-2 text-base " role="alert">
            ${content}
        </div>
    `;
    document.querySelector(".alret").innerHTML = alertcontent;
    setTimeout(() => {
        document.querySelector("[role='alert']").remove();
    }, 3000);

    return;

}

function getCurentUser() {
    let user = "";
    let userInfo = localStorage.getItem("user");
    if (userInfo != null) {
        user = JSON.parse(userInfo);
    }
    return user;
}

function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    return postId;
}

function getPost() {
    axios.get(`${baseUrl}/posts/${getPostId()}`)
    .then((response) => {
        const post = response.data.data;
        const comments = post.comments;
        console.log(post);
        let postTitle = "";
        if (post.title != null) {
            postTitle = post.title;
        }

        let commentContent = "";

        

        comments.forEach(comment => {
            commentContent += `
                <div class=" flex items-center gap-2 px-6 py-3 text-primary-700">
                    <div class="flex flex-shrink-0 self-start cursor-pointer">
                        <img src=${comment.author.profile_image} alt=""
                            class="h-8 w-8 object-cover rounded-full">
                    </div>

                    <div class="flex items-center justify-center space-x-2">
                        <div class="block">
                            <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                                <div class="font-medium">
                                    <a href="#" class="hover:underline text-sm">
                                        <small>@${comment.author.username}</small>
                                    </a>
                                </div>  
                                <div class="text-lg">
                                    ${comment.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById("post").innerHTML = "";

        const content = `
        <div id="${post.id}"
        class="block mb-6 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-primary-700">
        <div class="flex gap-1 border-b-2 px-6 py-3 dark:border-primary-600 dark:text-primary-50">
            <img src="${post.author.profile_image}"
                class="w-6 rounded-full"
                alt="" />
            <span class="text-primary-700 font-bold">@${post.author.username}</span>
        </div>
        <div class = "post_body cursor-pointer" onclick="window.location.href = 'post.html?id=${post.id}'">
            <div class=" relative p-6 pb-0 overflow-hidden bg-cover bg-no-repeat">
                <img class="rounded-lg w-full"
                    src=${post.image}
                    alt="" />
                <p class="text-base text-primary-600 dark:text-primary-200">
                    <small class="text-primary-500 dark:text-primary-400">${post.created_at}</small>
                </p>
            </div>
            <div class="px-6 ">
                <h5 class="mb-2 text-xl font-medium leading-tight text-primary-800 dark:text-primary-50">
                    ${post.title}
                </h5>
                <p class="mb-4 text-base text-primary-700 dark:text-primary-200">
                    ${post.body}
                </p>
            </div>
        </div>
        <div class="border-t-2 flex items-center gap-2 flex-wrap px-6 py-3 text-primary-700 ">
            <div class="cursor-pointer">
                <i class="fa-regular fa-comment"></i>
                <span>
                    ${post.comments_count} comments
                </span>
            </div>
            <div id="post_tags_${post.id}" class="flex gap-2 flex-wrap">
            </div>
        </div>
        <div id="comments_box" class="flex flex-col gap-2"> 
            ${commentContent }
        </div>
        <div id="add_comment_box" class="px-6 py-3 border-t-2">
            <div class="flex items-center py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <textarea id="add_comment" rows="1" class="resize-none block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg  border-2 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Comment..."></textarea>
                <button id="add_comment_btn"  class="inline-flex justify-center p-2 text-primary-600 rounded-full cursor-pointer hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                    <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
        </div>

    </div>
        `;
        document.getElementById("post").innerHTML = content;
        document.getElementById("post_author").innerHTML = `${post.author.username}'s`;

        
        document.querySelector(`#add_comment_btn`).addEventListener("click", addComment);
    });

}


function addComment() {
    
    console.log("addComment function started");
    
        const token = localStorage.getItem("token");
    const comment = document.getElementById("add_comment").value;
    const postId = getPostId();
    const params = {
        "body": comment,
        "post_id": postId
    };
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    axios.post(`${baseUrl}/posts/${postId}/comments`, params, config)
        .then((response) => {
            console.log(response.status);
            // alert 
            showAlert("You are add comment successfully", "success");
            getPost();
        })                                              
        .catch((error) => {
            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });                     
    }

function editPostBtnClickd(postObj) {
    let post = JSON.parse(decodeURIComponent(postObj));
    console.log(post);

    document.getElementById("edit_post_id").value = post.id;
    document.getElementById("edit_post_title").value = post.title;
    document.getElementById("edit_post_description").value = post.body;
    document.getElementById("edit_post_image").value = post.image;
}
function deletPostBtnClickd(postObj) {
    let post = JSON.parse(decodeURIComponent(postObj));
    console.log(post);
    document.getElementById("delete_post_id").value = post.id;
}

function confermDeletePostBtnClicked() {
    const postId = document.getElementById("delete_post_id").value;
    const token = localStorage.getItem("token");
    const params = {
        "_method": "DELETE"
    };
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    axios.post(`${baseUrl}/posts/${postId}`, params, config)
        .then((response) => {
            console.log(response.status);
            

            // hide modal
            hideModal(document.getElementById("deletePostModalVarying"));
            // alert
            console.log("Before showAlert");
            showAlert("You are delete post successfully", "success");

            getPosts();
            console.log("After showAlert");
        })
        .catch((error) => {
            console.log(error.response.data);

            console.log(error.response.data);
            // alert
            showAlert(error.response.data.message, "danger");
        });
    console.log(userName);
    console.log("loginBtnClicked function ended");
}