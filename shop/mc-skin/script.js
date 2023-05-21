document.addEventListener("DOMContentLoaded", function() {
    fetchSkinOptions();
    showImage();
});

function fetchSkinOptions() {
    fetch("https://api.mineskin.eu/get/list/Dwarslooper")
        .then(response => response.json())
        .then(data => {
            // data enthält alle Skin-Optionen für Dwarslooper
            processSkinOptions(data);
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der Skin-Optionen:", error);
        });
}

function processSkinOptions(options) {
    var selectElement = document.querySelector(".select");
    
    options.forEach(option => {
        var optionElement = document.createElement("option");
        optionElement.value = option.id;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });
}

function showImage() {
    var selectElement = document.querySelector(".select");
    var logoImage = document.getElementById("logoImage");

    var selectedOptionId = selectElement.value;
    // Hier können Sie die ID verwenden, um die entsprechende Skin-URL von der API abzurufen
    
    // Beispiel:
    fetch(`https://api.mineskin.eu/get/id/${selectedOptionId}`)
        .then(response => response.json())
        .then(data => {
            var skinUrl = data.data.texture.url;
            logoImage.src = skinUrl;
            logoImage.style.display = "block";
        })
        .catch(error => {
            console.error("Fehler beim Abrufen des Skin-Bildes:", error);
        });
}