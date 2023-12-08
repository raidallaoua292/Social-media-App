// BEGIN: Test Case 1
// Ensure that the setupUI function correctly sets the display of login, signup, and logout elements based on the token value
localStorage.setItem("token", null);
setupUI();
console.assert(document.getElementById("login").style.display === "", "Login element should be visible");
console.assert(document.getElementById("signup").style.display === "", "Signup element should be visible");
console.assert(document.getElementById("logout").style.display === "none", "Logout element should be hidden");

localStorage.setItem("token", "some_token");
setupUI();
console.assert(document.getElementById("login").style.display === "none", "Login element should be hidden");
console.assert(document.getElementById("signup").style.display === "none", "Signup element should be hidden");
console.assert(document.getElementById("logout").style.display === "", "Logout element should be visible");
// END: Test Case 1