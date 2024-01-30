const cookieContainer = document.querySelector('.cookie-container');
const cookieButton = document.querySelector('.cookie-button');


cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
})

setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active");
}, 2000);

document.addEventListener('DOMContentLoaded', function () {
    openPopup(); // Die openPopup-Funktion wird beim Laden der Seite aufgerufen
});

// Das Popup anzeigen
function openPopup() {
    document.getElementById('customPopup').style.display = 'block';
}

// Das Popup schließen
function closePopup() {
    document.getElementById('customPopup').style.display = 'none';
}

// Die Seite weiterleiten, wenn das Bild im Popup geklickt wird
document.getElementById('customPopup').addEventListener('click', function (event) {
    // Verhindere, dass das Klick-Ereignis auf das übergeordnete Element (das Popup) weitergeleitet wird
    event.stopPropagation();
    
    // Hier kannst du Code hinzufügen, um die Seite weiterzuleiten, wenn das Bild im Popup geklickt wird
    window.location.href = '/shop/ufo/'; // Ändere dies zu der gewünschten Ziel-URL
});

// Den Event-Listener für das X-Element aktualisieren
document.querySelector('.close').addEventListener('click', function (event) {
    // Verhindere, dass das Klick-Ereignis auf das übergeordnete Element (das Popup) weitergeleitet wird
    event.stopPropagation();
    
    // Schließe das Popup
    closePopup();
});
