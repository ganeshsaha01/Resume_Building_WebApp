//making the api call
function fetchUserDataAndAlert() {
    const email = localStorage.getItem("userEmail");
    // Replace 'http://localhost:8080/user/' with your actual backend API URL
    const apiUrl = 'http://172.203.117.40:8080/user/' + email; // Replace 'some@email.com' with the actual email
    // alert(apiUrl);
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
            document.getElementById("name").textContent = data.data.name;
            document.getElementById("fill_abouts").textContent = data.data.about;
            document.getElementById("fill_email").textContent = data.data.email;
            document.getElementById("fill_phone").textContent = data.data.number;
            document.getElementById("fill_adress").textContent = data.data.address;
            document.getElementById("fill_skill").textContent = data.data.skills;
            document.getElementById("fill_edu_most_recent").textContent = data.data.education_school1;
            document.getElementById("fill_edu_scnd_recent").textContent = data.data.education_school2;
            document.getElementById("fill_exprnc_most_recent_tittle").textContent = data.data.experience1_title;
            document.getElementById("fill_details_1").textContent = data.data.about_experience1;
            document.getElementById("fill_exprnc_scnd_recent_tittle").textContent = data.data.experience2_title;
            document.getElementById("fill_details_2").textContent = data.data.about_experience2;

        })
        .catch(error => {
            alert('Error fetching user data: ' + error.message);
            console.error('Error:', error);
        });
}

fetchUserDataAndAlert();

// ldocument.getElementById("fill_abouts").textContent = data.data.about;
            // ldocument.getElementById("fill_email").textContent = data.data.email;
            // ldocument.getElementById("fill_phone").textContent = data.data.number;
            // ldocument.getElementById("fill_adress").textContent = data.data.address;
            // ldocument.getElementById("fill_skill").textContent = data.data.skills;