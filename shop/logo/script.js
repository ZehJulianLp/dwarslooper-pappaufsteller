document.addEventListener("DOMContentLoaded", function() {
    showImage();
});

function showImage() {
    var selectElement = document.querySelector(".select");
    var logoImage = document.getElementById("logoImage");

    if (selectElement.value === "alt") {
        logoImage.src = "../../img/dwarslogoalt.png";
    } else if (selectElement.value === "aktuell") {
        logoImage.src = "../../img/logo.webp";
    }
    
    logoImage.style.display = "block";
}

function showCustomAlert(message) {
    var customAlert = document.getElementById('custom-alert');
    var customAlertMessage = document.getElementById('custom-alert-message');

    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';

    // Verzögertes Ausblenden der benutzerdefinierten Benachrichtigung
    setTimeout(function() {
        customAlert.style.display = 'none';
    }, 3000); // Anzeige für 3 Sekunden
}