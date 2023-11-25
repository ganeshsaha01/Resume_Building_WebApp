$(document).ready(function () {
  // Function to validate email
  function validateEmail(email) {
    // You can use a regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Function to validate password
  function validatePassword(password) {
    // Password should be at least 8 characters long
    return password.length >= 8;
  }

  // Function to check if the password and confirm password match
  function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  // Function to update progress bar
  function updateProgressBar(currentStep) {
    var totalSteps = 4;
    var progress = Math.floor(((currentStep - 1) / (totalSteps - 1)) * 100); // Adjusted calculation
    $(".progress-bar").css("width", progress + "%").attr("aria-valuenow", progress);
    $(".progress-bar").text(progress + "%");
  }

  // Function to show/hide next and previous buttons based on the current step
  function updateButtons(currentStep) {
    if (currentStep === 1) {
      $(".prev-tab").hide();
    } else {
      $(".prev-tab").show();
    }

    if (currentStep === 4) {
      $(".next-tab").hide();
    } else {
      $(".next-tab").show();
    }
  }

  // Initial setup
  var currentStep = 1;
  updateProgressBar(currentStep);
  updateButtons(currentStep);

  // Next button click event
  $(".next-tab").click(function () {
    // Validate fields based on the current step
    if (currentStep === 1) {
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirm_password").val();

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!validatePassword(password)) {
        alert("Please enter the Password!Password must be at least 8 characters long.");
        return;
      }

      if (!passwordsMatch(password, confirmPassword)) {
        alert("Password and Confirm Password do not match.");
        return;
      }
    }

    // Increment the step and update the progress bar and buttons
    currentStep++;
    updateProgressBar(currentStep);
    updateButtons(currentStep);

    // Show the next tab
    $(".nav-pills a[href='#step" + currentStep + "']").tab("show");
  });

  // Previous button click event
  $(".prev-tab").click(function () {
    // Decrement the step and update the progress bar and buttons
    currentStep--;
    updateProgressBar(currentStep);
    updateButtons(currentStep);

    // Show the previous tab
    $(".nav-pills a[href='#step" + currentStep + "']").tab("show");
  });

  // Submit button click event for the final step
  $("#submitStep4").click(function () {
    // Add any additional validation or processing for the final step if needed
    // ...
    // event.preventDefault();


    // Submit the form if all checks pass
    $("#step4Form").submit();
    createUser();
  });
});


function createUser() {
  const apiUrl = 'http://172.203.117.40:8080/createUser';

  // Request body //sending the object
  const requestBody = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    number: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    about: document.getElementById("about").value,
    education_school1: document.getElementById("education_most_recent").value,
    education_school2: document.getElementById("education_second_recent").value,
    skills: document.getElementById("skills").value,
    experience1_title: document.getElementById("experience_most_recent").value,
    about_experience1: document.getElementById("details_recent").value,
    experience2_title: document.getElementById("experience_second_recent").value,
    about_experience2: document.getElementById("details_second_recent").value
  };

  // const requestBody = "hello";

  // Make the POST request
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response}`);
      }
      return response.json();
    })
    .then(data => {
      // Do something with the response data
    })
    .catch(error => {
  
    });
    alert("user created");
    window.location.href = "index.html";
  
}