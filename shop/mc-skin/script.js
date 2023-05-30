document.addEventListener("DOMContentLoaded", function() {
    showImage();
});

function showImage() {
    var selectElement = document.querySelector(".select");
    var logoImage = document.getElementById("skinImage");

    if (selectElement.value === "blau") {
        logoImage.src = "../../img/skins/blau.png";
    } else if (selectElement.value === "blau-gelb") {
        logoImage.src = "../../img/skins/blaugelb.png";
    } else if (selectElement.value === "Coder") {
        logoImage.src = "../../img/skins/coder.png";
    } else if (selectElement.value === "grün") {
        logoImage.src = "../../img/skins/grün.png";
    } else if (selectElement.value === "Krabbe") {
        logoImage.src = "../../img/skins/krabbe.png";
    } else if (selectElement.value === "orange") {
        logoImage.src = "../../img/skins/orange.png";
    } else if (selectElement.value === "Redstone-Kaktus") {
        logoImage.src = "../../img/skins/redstonekaktus.png";
    } else if (selectElement.value === "Streifenshirt") {
        logoImage.src = "../../img/skins/streifen.png";
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