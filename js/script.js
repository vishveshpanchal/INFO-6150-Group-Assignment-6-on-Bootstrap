const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function setFeedbackFormBackground() {
    document.body.style.backgroundImage = "url('./img/feedback_img.jpg')";
    document.body.style.backgroundSize = "cover";
}


function spinnerVisibility() {

    document.getElementById("spinnerFeedback").style.display = "block";
    setTimeout(function sendMail() {
    
        document.getElementById("spinnerFeedback").style.display = "none";
    
        var link = "mailto:soneta.h@northeastern.edu"
        + "?cc=solanki.o@northeastern.edu"
        + "&subject=" + encodeURIComponent("Recipes Review")
        + "&body=" + encodeURIComponent(document.getElementById('myFeedbackComments').value)
        ;
    
        window.location.href = link;
    }, 5000); 

    setTimeout(() => {
        document.getElementById("alertFeedback").style.display = "flex";
    }, 10000);
    
}

function updateTextInput(val) {
    document.getElementById('textInputRange').value=val; 
}

