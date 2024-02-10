document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');
    var forgotPasswordLink = document.getElementById('forgot-password');
    var createAccountLink = document.getElementById('create-account');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement login logic (e.g., send data to a server for validation)
        console.log('Login Form Submitted');
    });

    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Implement logic for handling forgot password (e.g., show a modal or navigate to a forgot password page).
        console.log('Forgot Password clicked');
    });

    createAccountLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Redirect to the registration page
        window.location.href = 'registration.html';
    });
});
