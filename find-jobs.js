document.addEventListener("DOMContentLoaded", function () {
    var loading = document.getElementById("loading");
    var viewJobsBtn = document.getElementById("viewJobsBtn");

   
    loading.addEventListener("animationend", function () {
        
        loading.style.opacity = 0;

        viewJobsBtn.style.display = "inline-block";

        loading.style.animation = "none";
    });
});

function opennxtpg(){
    window.location.href="job_suggest.html";
}
