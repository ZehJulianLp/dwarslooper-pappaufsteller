var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
  var cartContainer = document.getElementById('cart-container');
  var totalPrice = 0;

  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Ihr Kaktus hat noch keine Items zerstört.</p>';
    return;
  }

  if (cartItems.length > 0) {
    getCheckout();
  }

  function getCheckout() {
    var checkout = document.getElementById('checkout');
    if (checkout) {
      checkout.style.display = 'block';
    }
  }

  var table = document.createElement('table');
  table.classList.add('cart-table');

  var tableHeader = document.createElement('thead');
  tableHeader.innerHTML = '<tr><th>Name</th><th>Preis</th><th></th><th></th></tr>';
  table.appendChild(tableHeader);

  var tableBody = document.createElement('tbody');

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var row = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    var priceCell = document.createElement('td');
    priceCell.textContent = item.price + ' Emeralds';
    row.appendChild(priceCell);

    var removeCell = document.createElement('td');
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Dieses entfernen...';
    removeButton.addEventListener('click', removeItem.bind(null, item));
    removeCell.appendChild(removeButton);
    row.appendChild(removeCell);

    var addCell = document.createElement('td');
    var addButton = document.createElement('button');
    addButton.textContent = 'Weiteres hinzufügen...';
    addButton.addEventListener('click', addItem.bind(null, item));
    addCell.appendChild(addButton);
    row.appendChild(addCell);

    tableBody.appendChild(row);

    totalPrice += item.price;
  }

  table.appendChild(tableBody);

  cartContainer.appendChild(table);

  var totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = 'Gesamtpreis: ' + totalPrice + ' Emeralds';
}

function removeItem(item) {
  var index = cartItems.indexOf(item);
  if (index !== -1) {
    var removedItem = cartItems.splice(index, 1);
    if (removedItem.length > 0) {
      var removedItemName = removedItem[0].name;
      console.log('Artikel "' + removedItemName + '" wurde aus dem Warenkorb entfernt.');
      localStorage.setItem('cart', JSON.stringify(cartItems));
      displayCartItems();
      location.reload(); // Seite aktualisieren
    }
  }
}

function addItem(item) {
  cartItems.push(item);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  displayCartItems();
  location.reload(); // Seite aktualisieren
}

displayCartItems();

document.getElementById('checkout-button').addEventListener('click', function() {
  window.open('../checkout/', '_self');
});
