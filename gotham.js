document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');
    var forgotPasswordLink = document.getElementById('forgot-password');
    

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Extract login form values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Perform login logic (e.g., send data to a server for validation)
        console.log('Username:', username);
        console.log('Password:', password);
        // You can add logic here to handle the authentication.
    });

    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Implement logic for handling forgot password (e.g., show a modal or navigate to a forgot password page).
        console.log('Forgot Password clicked');
    });

    
});
