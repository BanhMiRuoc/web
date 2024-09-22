$(document).ready(function() {
    $("#button-submit").click(function(event) {
      event.preventDefault();
  
      const emailInput = $("#mail");
      const passwordInput = $("#pword");
      const errorMessage = $("#errorMessage");
  
      if (!emailInput.val() && !passwordInput.val()) {
        errorMessage.text("Please enter your email and password.");
        emailInput.focus();
        return;
      }
      if (!emailInput.val()) {
        errorMessage.text("Please enter your email.");
        emailInput.focus(); 
        return;
      }
      if (!passwordInput.val()) {
        errorMessage.text("Please enter your password.");
        passwordInput.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.val())) {
        errorMessage.text("Your email is not correct.");
        emailInput.focus();
        return;
      }

      if (passwordInput.val().length < 6) {
        errorMessage.text("Your password must contain at least 6 characters.");
        passwordInput.focus();
        return;
      }
      else {
        errorMessage.css('color', 'rgb(0, 128, 0)');
        errorMessage.text("Login successfully!");
      }
    });
  });
  