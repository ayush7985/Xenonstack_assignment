function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var signupErrorMessage = document.getElementById("signup-error-message");

    // Dummy signup logic (replace with actual signup mechanism)
    if (newUsername && newPassword) {
        // Successful signup
        signupErrorMessage.textContent = "";
        alert("Signup successful! Now you can login.");
        // Redirect to login page
        window.location.href = "login.html";
    } else {
        // Invalid signup, show error message
        signupErrorMessage.textContent = "Please fill in all fields.";
    }
}
