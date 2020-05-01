$(document).ready(function() {
    $("#login-form").submit(function(e) {
        console.log("Email: " + $("#inputEmail").val());
        console.log("Password: " + $("#inputPassword").val());
        console.log("URL: " + $("#inputURL").val());

        e.preventDefault();
    });
});

/* ===> Using DOM
function login() {
    let email = document.getElementById("inputEmail").value;
    let pwd = document.getElementById("inputPassword").value;
    let url = document.getElementById("inputURL").value;

    console.log("Email: " + email);
    console.log("Password: " + pwd);
    console.log("URL: " + url);
};
*/