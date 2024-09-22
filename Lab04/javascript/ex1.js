function showError(message) {
    let error = document.getElementsByClassName('errorMessage')[0];
    if (!error.classList.contains('d-none')) {
        error.classList.add('d-none');
    }
    else {
        error.classList.remove('d-none');
        error.innerHTML = message;
    }
}
function validate() {
    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("pwd");
    let email = emailField.value;
    let password = passwordField.value;

    if (email == '') {
        emailField.focus();
        showError("Please enter your email");
        return false;
    }
    if (!email.includes('@')) {
        showError("This is not a valid email address");
        return false;
    }
    if (password == '') {
        passwordField.focus();
        showError("Please enter your password");
        return false;
    }
    if (password.length < 6) {
        showError("Password must be at least 6 characters long");
        return false;
    }
    return true; 
}