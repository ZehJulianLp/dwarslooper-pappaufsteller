var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

var kaktusContainer = document.getElementById('kaktus-container');
var progressBar = document.getElementById('progress-bar');
var progressText = document.getElementById('progress-text');

var totalItems = cartItems.length;
var currentItemIndex = 0;

function destroyItems() {
  if (currentItemIndex < totalItems) {
    var currentItem = cartItems[currentItemIndex];
    var itemName = currentItem.name;

    var imagePath = generateImagePath(itemName);
    var itemImage = createItemImage(imagePath);

    var itemFallInterval = setInterval(function() {
      var topPosition = parseFloat(itemImage.style.top);
      if (topPosition < -250) {
        topPosition += 20;
        itemImage.style.top = topPosition + 'px';
      } else {
        clearInterval(itemFallInterval);
        kaktusContainer.removeChild(itemImage);
        currentItemIndex++;
        var progressPercentage = (currentItemIndex / totalItems) * 100;
        progressBar.style.width = progressPercentage + '%';
        progressText.textContent = 'Ihre Items werden zerstört... ' + currentItemIndex + ' von ' + totalItems + ' abgeschlossen';

        var currentItem = cartItems[currentItemIndex - 1];
        var itemName = currentItem.name;
        playSkinSound(itemName);

        destroyItems();
        
        if (currentItemIndex >= totalItems) {
          setTimeout(function() {
            showCheckmarkAnimation();
            clearCartItems();
          }, 1000); // Warten Sie 1 Sekunde, bevor Sie den Checkmark anzeigen
        }
      }
    }, 100);
  }
}

function showCheckmarkAnimation() {
  var checkmark = document.getElementById('checkmark');
  checkmark.style.display = 'block';
}

function clearCartItems() {
  localStorage.removeItem('cart');
}

function generateImagePath(itemName) {
  var imagePath;
  // Generieren Sie den Bildpfad basierend auf dem Namen des Items
  if (itemName === 'Dwarslooper-Logo: alt') {
    imagePath = '../../img/dwarslogoalt.png';
  } else if (itemName === 'Dwarslooper-Logo: aktuell') {
    imagePath = '../../img/logo.webp';
  } else if (itemName === 'Dwarslooper-Skin: blau') {
    imagePath = '../../img/skins/blau.png';
  } else if (itemName === 'Dwarslooper-Skin: blau-gelb') {
    imagePath = '../../img/skins/blaugelb.png';
  } else if (itemName === 'Dwarslooper-Skin: Coder') {
    imagePath = '../../img/skins/coder.png';
  } else if (itemName === 'Dwarslooper-Skin: grün') {
    imagePath = '../../img/skins/grün.png';
  } else if (itemName === 'Dwarslooper-Skin: Krabbe') {
    imagePath = '../../img/skins/krabbe.png';
  } else if (itemName === 'Dwarslooper-Skin: Redstone-Kaktus') {
    imagePath = '../../img/skins/redstonekaktus.png';
  } else if (itemName === 'Dwarslooper-Skin: orange') {
    imagePath = '../../img/skins/orange.png';
  } else if (itemName === 'Dwarslooper-Skin: Streifenshirt') {
    imagePath = '../../img/skins/streifen.png';
  } else if (itemName === 'TJC-UFO: standard') {
    imagePath = '../../img/ufo.png';
  } else if (itemName === 'TJC-UFO: schnell') {
    imagePath = '../../img/ufo.png';
  }  return imagePath;
}
function createItemImage(imagePath) {
    var itemImage = document.createElement('img');
    itemImage.src = imagePath;
    itemImage.classList.add('item-image');
    itemImage.style.position = 'absolute';
    itemImage.style.left = (kaktusContainer.offsetWidth - itemImage.offsetWidth) / 2 + 'px';
    itemImage.style.top = '-700px';
    kaktusContainer.appendChild(itemImage);
    return itemImage;
  }
  
  function playSkinSound(itemName) {
    var skinNames = [
      'Dwarslooper-Skin: blau',
      'Dwarslooper-Skin: blau-gelb',
      'Dwarslooper-Skin: Coder',
      'Dwarslooper-Skin: grün',
      'Dwarslooper-Skin: Krabbe',
      'Dwarslooper-Skin: Redstone-Kaktus',
      'Dwarslooper-Skin: orange',
      'Dwarslooper-Skin: Streifenshirt'
    ];
  
    if (skinNames.includes(itemName)) {
      var soundPath = '../../img/oof.mp3';
      var audio = new Audio(soundPath);
      audio.play();
    }
  }
  
  destroyItems();