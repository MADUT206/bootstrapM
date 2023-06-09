function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
$('#signupLoader').hide();
$("#signupForm").on('submit',(function(e) {
   e.preventDefault();
 // alert("okay now");
  var names = $("#signupName").val();
   $.ajax({
          url: "./signupNewsletters.php",
          type: "POST",
          data:  new FormData(this),
          contentType: false,
                cache: false,
          processData:false,
          beforeSend : function()
          {
           $('#signupLoader').show();
          },
          success: function(data)
            {
          if(data=='invalid')
          {
          // invalid file format.
           //$("#err").html("Invalid File !").fadeIn();
          }
          else
          {
          $('#signupSuccess').html("<div class='alert alert-success'>");
              $('#signupSuccess > .alert-success').html("<button type='button' id='buttonclose' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                      .append("</button>");
              $('#signupSuccess > .alert-success')
                      .append(`<strong>${names}, your Subscription has been received successfully. </strong>`);
              $('#signupSuccess > .alert-success')
                      .append('</div>');
              $('#signupForm').trigger("reset");
              $('#signupLoader').hide();
             // $('#signupForm').each(function() { this.reset() });
             
           //alert('Uploaded file successfully');
          }
            },
            error: function(e) 
            {
              $('#signupSuccess').html("<div class='alert alert-danger'>");
              $('#signupSuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'> &times;")
                      .append("</button>");
              $('#signupSuccess > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
              $('#signupSuccess > .alert-danger').append('</div>');
              $('#signupForm').trigger("reset");
              $('#signupForm').each(function() { this.reset() });
              $(".custom-file-label").removeClass("selected").html('Upload file');
              $("#buttonSignup").removeClass("selected");
              $('#signupLoader').hide();
             // alert('errrrrrrrrrror');
            },
            
          complete: function () {
              // setTimeout(function () {
              //     $this.prop("disabled", false);
              // }, 1000);
              $("#buttonSignup").removeClass("selected");
              $('#signupLoader').hide();
              
          }
     });
     $("a[data-toggle=\"tab\"]").click(function (e) {
      e.preventDefault();
     // $(this).tab("show");
      });

  }));
  $('#signupLoader').hide();
$('#signupName').focus(function () {
    $('#signupSuccess').html('');
});