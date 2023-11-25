
function opennxtpg() {
    // alert("hello world");

    var userEmail = document.getElementById('type_area').value;
    localStorage.setItem("userEmail", userEmail);
    // Display the value in the alert (optional)
    // alert("Hello, " + userEmail);
    window.location.href = "Choose_Template.html";
    return false; // To prevent further execution
}

// Example function that uses userEmail
