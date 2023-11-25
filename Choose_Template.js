

function tryIt() {
    // Get the index of the active carousel item
    var activeIndex = $('.carousel-item.active').index();

    // Redirect to the corresponding HTML file based on the index
    switch (activeIndex) {
        case 0:
            window.location.href = 'CV1.html';
            break;
        case 1:
            window.location.href = 'CV2.html';
            break;
        case 2:
            window.location.href = 'CV3.html';
            break;
        default:
            // Handle other cases if needed
            break;
    }
}

// function opennxtpg() {
//     saveEmail(tryIt); // Pass tryIt as a callback to saveEmail
// }

function nxtpg() {
    window.location.href = "find-jobs.html";
}

function nxtpg2() {
  const email = localStorage.getItem("userEmail");

    window.location.href = "http://172.203.117.40:8080/login";
}





