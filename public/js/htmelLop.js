

addModlasToHtmlPage()

/* Functions  */
function addModlasToHtmlPage() {
    const content = `
    <!-- MODALS -->
    <!--  login Modal -->
    <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="loginModalVarying"
        tabindex="-1"
        aria-labelledby="loginModalVaryingLabel"
        aria-hidden="true">
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="loginModalVaryingLabel">
                        Login
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <form action="#">
                        <div class="mb-3">
                            <input
                                type="text" placeholder="User Name" value="raid55"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="username" />
                            </div>
                            <div class="mb-3">
                            <input
                                type="password" placeholder="Password" value="123456"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="password" />
                            </div>
                        <div class="mb-3 flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" class="text-sm text-primary-700 hover:underline dark:text-primary-500">Lost Password?</a>
                        </div>
                        <button 
                            id="login_btn"
                            type="submit" 
                            class="mb-3 w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Login to your account
                        </button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? 
                            <a 
                            type="button"
                                data-te-modal-dismiss
                                aria-label="Close"
                                class="cursor-pointer text-primary-700 hover:underline dark:text-primary-500">
                                Create account
                            </a>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>  
  
    <!--  singup Modal -->
    <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="singupModalVarying"
        tabindex="-1"
        aria-labelledby="singupModalVaryingLabel"
        aria-hidden="true">
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="singupModalVaryingLabel">
                        Singup
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <form action="#">
                        <div class="mb-3">
                            <input
                                type="text" placeholder="Your Name"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="singup_name" />
                            </div>
                            <div class="mb-3">
                            <input
                                type="text" placeholder="Your User Name"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="singup_username" />
                            </div>
                            <div class="mb-3">
                            <input
                                type="email" placeholder="Your Email"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="singup_email" />
                            </div>
                            <div class="mb-3">
                            <input
                                type="password"  placeholder="Your Password"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="singup_password" />
                            </div>
                            <div class="mb-3">
                            <input
                                type="file"  placeholder="Your Image (optional)"
                                class="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="singup_ima" />
                            </div>
                        <div class="mb-3 flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                                </div>
                                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <button 
                            id="singup_btn"
                            type="submit" 
                            class="mb-3 w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            register your account
                        </button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            You Are registered? 
                            <!-- todo: go to login modal -->
                            <a 
                            type="button"
                                data-te-modal-dismiss
                                aria-label="Close"
                                class="cursor-pointer text-primary-700 hover:underline dark:text-primary-500">
                                login now
                            </a>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    
    <!-- Add post Modal -->
    <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="addPostModalVarying"
        tabindex="-1"
        aria-labelledby="addPostModalVaryingLabel"
        aria-hidden="true">
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="addPostModalVaryingLabel">
                        Add Post
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <form action="#">
                        <div class="mb-3">
                            <input
                                type="text" placeholder="Title"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="post_title" />
                            </div>
                            <div class="mb-3">
                            <textarea
                                type="text" placeholder="Description"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="post_description" ></textarea>
                            </div>
                            <div class="mb-3">
                            <input
                                type="file" placeholder="Image"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="post_image" />
                            </div>
                            <input type="hidden" id="edit_post_id" value= >
                        <button
                            id="add_post_btn"
                            type="submit" 
                            class="mb-3 w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Add Post
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    </div>   
    <!-- edit Post Modal -->
    <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editPostModalVarying"
        tabindex="-1"
        aria-labelledby="editPostModalVaryingLabel"
        aria-hidden="true">
        <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                        class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="editPostModalVaryingLabel">
                        Add Post
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <form action="#">
                        <div class="mb-3">
                            <input
                                type="text" placeholder="Title"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="edit_post_title" />
                            </div>
                            <div class="mb-3">
                            <textarea
                                type="text" placeholder="Description"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="edit_post_description" ></textarea>
                            </div>
                            <div class="mb-3">
                            <input
                                type="file" placeholder="Image"
                                class="relative m-0 -mr-0.5 w-full flex"
                                id="edit_post_image" />
                            </div>
                        <input type="hidden" id="edit_post_id" value="">
                        <button
                            id="edit_post_btn"
                            type="submit" 
                            class="mb-3 w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            edit Post
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    </div>  

    <!-- Alerts -->

    <!-- =========================== -->
    <div
        data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="deletePostModalVarying"
        tabindex="-1"
        
        aria-hidden="true">
            <div data-te-modal-dialog-ref
            id="popup-modal" tabindex="-1" class="  overflow-y-auto overflow-x-hidden fixed top-0 left-[50%] translate-y-[-50px] z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button 
                        data-te-modal-dismiss
                        aria-label="Close"
                        type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button id="delete_post_btn"
                                type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                Yes, I'm sure
                            </button>
                            <button 
                                data-te-modal-dismiss
                                type="button" 
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancel
                            </button>
                            <input type="hidden" id="delete_post_id" value="">
                        </div>
                    </div>
                </div>
            </div>
    </div>

    

    <!-- =========================== -->

    <div class="alret">

    </div>
    <!-- Add posts button -->
        

    <div data-dial-init class="fixed bottom-6 right-6 z-10 group">
        <div id="add-post-btn"
        data-te-toggle="modal"
        data-te-target="#addPostModalVarying"
        data-te-whatever="@mdo"
        data-te-ripple-init
        role="button"
        class=" bg-primary rounded-[100%] flex items-center justify-center  p-2 w-10 h-10  text-white text-4xl ">
        +
    </div>
    </div>

            <!-- ========================================================= -->
            <!-- ======================== Main navigation container ==================== -->

    <div class=" sm:container pt-2">
        
        <nav
            class="relative flex w-full flex-nowrap items-center justify-between rounded-md bg-white py-2 text-primary-500 shadow-lg hover:text-primary-700 focus:text-primary-700 dark:bg-primary-600 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <div class="ml-2">
                    <a href="./index.html" class="text-xl text-primary-800 dark:text-primary-200" href="#"
                    >Green</a
                    >
                </div>
            <!-- Hamburger button for mobile view -->
                <button
                    class="block border-0 bg-transparent px-2 text-primary-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-primary-200 lg:hidden"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContent2"
                    aria-controls="navbarSupportedContent2"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <!-- Hamburger icon -->
                    <span class="[&>svg]:w-7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-7 w-7">
                        <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                    </svg>
                    </span>
                </button>

            <!-- Collapsible navbar container -->
                <div
                    class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent2"
                    data-te-collapse-item>
                    <!-- Left links -->
                    <ul
                    class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <!-- Home link -->
                        <li
                            class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                            data-te-nav-item-ref>
                            <a
                                class="active text-primary-500 transition duration-200 hover:text-primary-700 hover:ease-in-out  motion-reduce:transition-none dark:text-primary-200 dark:hover:text-primary-400 dark:focus:text-primary-400 lg:px-2 [&.active]:text-primary-800 dark:[&.active]:text-primary-400"
                                aria-current="page"
                                href="./index.html"
                                data-te-nav-link-ref
                                >Home
                            </a>
                        </li>
                        <!-- Porfile link -->
                        <li
                            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                            data-te-nav-item-ref>
                            <a
                            class=" p-0 text-primary-500 transition duration-200 hover:text-primary-700 hover:ease-in-out  motion-reduce:transition-none dark:text-primary-200 dark:hover:text-primary-400 dark:focus:text-primary-400 lg:px-2 [&.active]:text-primary-800 dark:[&.active]:text-primary-400"
                            href="./profile.html"
                            data-te-nav-link-ref
                            >Profale</a
                            >
                        </li>
                    
                    
                    </ul>

                    <!-- None Logged In User -->
                    <div class="">
                        <button
                        type="button" id="login"
                        class="inline-block rounded-full border-2 border-primary-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-800 hover:bg-primary-300 hover:bg-opacity-10 hover:text-primary-800 focus:border-primary-800 focus:text-primary-800 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-primary-100 dark:hover:bg-opacity-10"
                        data-te-toggle="modal"
                        data-te-target="#loginModalVarying"
                        data-te-whatever="@mdo"
                        data-te-ripple-init>
                            Login
                        </button>
                        <button
                        type="button" id="singup"
                        class="inline-block rounded-full border-2 border-primary-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-800 hover:bg-primary-300 hover:bg-opacity-10 hover:text-primary-800 focus:border-primary-800 focus:text-primary-800 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-primary-100 dark:hover:bg-opacity-10"
                        data-te-toggle="modal"
                        data-te-target="#singupModalVarying"
                        data-te-whatever="@mdo"
                        data-te-ripple-init>
                            Singup
                        </button>
                    </div>

                    <!-- Logged In User -->

                    <div class="flex items-center gap-2">
                        <div id="profile_login" class="flex gap-1 items-center">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                                class="w-6 rounded-full"
                                alt="Avatar" />
                            <span class="text-primary-700 font-bold">@raid258</span>
                        </div>
                        <button
                        type="button" id="logout"
                        class="inline-block rounded-full border-2 border-danger-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger-700 transition duration-150 ease-in-out hover:border-danger-800 hover:bg-danger-300 hover:bg-opacity-10 hover:text-danger-800 focus:border-danger-800 focus:text-danger-800 focus:outline-none focus:ring-0  dark:hover:bg-danger-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    </div>
    `
    document.body.insertAdjacentHTML('afterbegin', content)
    document.querySelector("#add-post-btn")

}