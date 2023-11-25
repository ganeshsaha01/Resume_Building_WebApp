function skill_1_job_1() {
    findJob1(document.getElementById("skill_1").textContent);
}
function skill_1_job_2() {
    findJob2(document.getElementById("skill_1").textContent);
}
function skill_1_job_3() {
    findJob3(document.getElementById("skill_1").textContent);
}

function skill_2_job_1() {
    findJob1(document.getElementById("skill_2").textContent);
}
function skill_2_job_2() {
    findJob2(document.getElementById("skill_2").textContent);
}
function skill_2_job_3() {
    findJob3(document.getElementById("skill_2").textContent);
}

function skill_3_job_1() {
    findJob1(document.getElementById("skill_3").textContent);
}
function skill_3_job_2() {
    findJob2(document.getElementById("skill_3").textContent);
}
function skill_3_job_3() {
    findJob3(document.getElementById("skill_3").textContent);
}

var skillString = "";

function callApiTogetSkills() {
    // API endpoint URL
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
            skillString = data.data.skills;
            console.info(skillString);
            var skillArray = skillString.split(',');
            //skill 1 part 
            document.getElementById("skill_1").textContent = skillArray[0];
            document.getElementById("skill_2").textContent = skillArray[1];
            document.getElementById("skill_3").textContent = skillArray[2];


            
        })
        .catch(error => {
            alert('Error fetching user data: ' + error.message);
            console.error('Error:', error);
        });

}
callApiTogetSkills();

function findJob1(value) {
    // console.log("window.location.href = `https://in.indeed.com/jobs?q=${value}`")

    window.open(`https://in.indeed.com/jobs?q=${value}`, '_blank');
  }
  function findJob2(value) {
    // console.log("window.location.href = `https://in.indeed.com/jobs?q=${value}`")
    window.open(`https://www.glassdoor.co.in/Job/${value}`, '_blank');
  }
  function findJob3(value) {
    // console.log("window.location.href = `https://in.indeed.com/jobs?q=${value}`")
    window.open(`https://www.simplyhired.co.in/search?q=${value}`, '_blank');
  }

// Call the function to make the API request
// callApi();
