// Zugriff auf den Warenkorb aus dem Local Storage
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
  var cartContainer = document.getElementById('cart-container');
  var totalPrice = 0;

  // Leeren des Inhalts des Warenkorbs
  cartContainer.innerHTML = '';

  // Überprüfen, ob Artikel im Warenkorb vorhanden sind
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Ihr Kaktus hat noch keine Items zerstört.</p>';
    return;
  }

  // Erstellen der Tabelle für die Anzeige der Artikel im Warenkorb
  var table = document.createElement('table');
  table.classList.add('cart-table');

  // Erstellen der Tabellenüberschriften
  var tableHeader = document.createElement('thead');
  tableHeader.innerHTML = '<tr><th>Name</th><th>Preis</th><th></th><th></th></tr>';
  table.appendChild(tableHeader);

  // Erstellen der Tabellenkörper für die Artikel
  var tableBody = document.createElement('tbody');

  // Schleife über die Artikel im Warenkorb
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    // Erstellen einer Zeile für den Artikel
    var row = document.createElement('tr');

    // Name des Artikels
    var nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Preis des Artikels
    var priceCell = document.createElement('td');
    priceCell.textContent = item.price + ' Emeralds';
    row.appendChild(priceCell);

    // Button zum Entfernen des Artikels
    var removeCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Entfernen';
    removeButton.addEventListener('click', removeItem.bind(null, item));
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    // Button zum Hinzufügen des Artikels
    var addCell = document.createElement('td');
    var addButton = document.createElement('button');
    addButton.textContent = 'Weiteres hinzufügen';
    addButton.addEventListener('click', addItem.bind(null, item));
    addCell.appendChild(addButton);
    row.appendChild(addCell);

    // Hinzufügen der Zeile zur Tabellenkörper
    tableBody.appendChild(row);

    // Addieren des Preises zum Gesamtpreis
    totalPrice += item.price;
  }

  // Hinzufügen des Tabellenkörpers zur Tabelle
  table.appendChild(tableBody);

  // Hinzufügen der Tabelle zum Warenkorb-Container
  cartContainer.appendChild(table);

  // Anzeigen des Gesamtpreises
  var totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = 'Gesamtpreis: ' + totalPrice + ' Emeralds';
}

// Funktion zum Entfernen eines Artikels aus dem Warenkorb
function removeItem(item) {
  // Finden des Index des zu entfernenden Artikels
  var index = cartItems.indexOf(item);
  if (index !== -1) {
    // Entfernen des Artikels aus dem Warenkorb

    var removedItem = cartItems.splice(index, 1);
    if (removedItem.length > 0) {
    var removedItemName = removedItem[0].name;
    console.log('Artikel "' + removedItemName + '" wurde aus dem Warenkorb entfernt.');
    // Speichern des aktualisierten Warenkorbs im Local Storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
    }
    }
    }
    
    // Funktion zum Hinzufügen eines Artikels zum Warenkorb
    function addItem(item) {
    cartItems.push(item);
    // Speichern des aktualisierten Warenkorbs im Local Storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
    }
    
    // Aufruf der Funktion, um die Artikel im Warenkorb anzuzeigen
    displayCartItems();