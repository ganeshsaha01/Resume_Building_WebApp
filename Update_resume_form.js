$(document).ready(function () {
  // Function to update progress bar
  function updateProgressBar(currentStep) {
    var totalSteps = 4;
    var progress = Math.floor(((currentStep - 1) / (totalSteps - 1)) * 100); // Convert to integer
    $(".progress-bar").css("width", progress + "%").attr("aria-valuenow", progress);
    $(".progress-bar").text(progress + "%");
  }


  // Function to show/hide next and previous buttons based on the current step
  function updateButtons(currentStep) {
    $(".prev-tab").toggle(currentStep !== 1);
    $(".next-tab").toggle(currentStep !== 4);
  }

  // Initial setup
  var currentStep = 1;
  updateProgressBar(currentStep);
  updateButtons(currentStep);

  // Next button click event
  $(".next-tab").click(function () {
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
    updateUserInfo();
    alert("user info updated");
    window.location.href = "Find_resume.html";
  });
});





//   //making the API call
function fetchUserDataToUpdateInfo() {
  const email = localStorage.getItem("userEmail");
  // Replace 'http://localhost:8080/user/' with your actual backend API URL
  const apiUrl = 'http://172.203.117.40:8080/user/' + email; // Replace 'some@email.com' with the actual email

  // Make the GET request
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      if (!response.ok) {
        alert("error");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Populate form fields with data
      document.getElementById("name").value = data.data.name;
      document.getElementById("about").value = data.data.about;
      document.getElementById("email").value = data.data.email;
      // document.getElementById("password").value = data.data.password;
      // document.getElementById("confirm_password").value = data.data.password;
      document.getElementById("phone").value = data.data.number;
      document.getElementById("address").value = data.data.address;
      document.getElementById("skills").value = data.data.skills;
      document.getElementById("education_most_recent").value = data.data.education_school1;
      document.getElementById("education_second_recent").value = data.data.education_school2;
      document.getElementById("experience_most_recent").value = data.data.experience1_title;
      document.getElementById("details_recent").value = data.data.about_experience1;
      document.getElementById("experience_second_recent").value = data.data.experience2_title;
      document.getElementById("details_second_recent").value = data.data.about_experience2;

      // Rest of your code
    })
    .catch(error => {
      // alert('Error fetching user data. Please check the console for details.');
      console.error('Error fetching user data:', error);
    });
}


function updateUserInfo() {
  const email = localStorage.getItem("userEmail");

  const apiUrl = 'http://172.203.117.40:8080/update/' + email;

  // Request body //sending the object
  const requestBody = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    // password: document.getElementById("password").value,
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      window.location.href = 'index.html';

      // alert("user info updated" + data);
      // Do something with the response data
    })
    .catch(error => {
      // alert('Error fetching user data. Please check the console for details.');
      console.error('Error fetching user data:', error);
    });
}

window.onload = function () {
  // Call fetchUserDataToUpdateInfo when the document is fully loaded
  fetchUserDataToUpdateInfo();

  // Your other code...
};