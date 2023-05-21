document.addEventListener("DOMContentLoaded", function() {
    showImage();
});

function showImage() {
    var selectElement = document.querySelector(".select");
    var logoImage = document.getElementById("logoImage");

    if (selectElement.value === "old") {
        logoImage.src = "../../img/dwarslogoalt.png";
    } else if (selectElement.value === "new") {
        logoImage.src = "../../img/logo.webp";
    }
    
    logoImage.style.display = "block";
}
