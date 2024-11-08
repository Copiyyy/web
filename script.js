const itemList = document.getElementById('itemList');
const inputItem = document.getElementById('inputItem');
const inputPrice = document.getElementById('inputPrice');
const inputQuantity = document.getElementById('inputQuantity');
const totalPriceElement = document.getElementById('totalPrice');

let totalPrice = 0;

function addItem() {
  const namaItem = inputItem.value.trim();
  const hargaItem = parseFloat(inputPrice.value);
  const jumlahItem = parseInt(inputQuantity.value);

  if (namaItem === '') {
    alert('Nama lonte tidak boleh kosong!');
    return;
  }
  
  if (isNaN(hargaItem) || hargaItem < 0) {
    alert('Harga lonte tidak valid!');
    return;
  }

  if (isNaN(jumlahItem) || jumlahItem < 1) {
    alert('Jumlah lonte tidak valid!');
    return;
  }

  const li = document.createElement('li');
  const totalItemPrice = hargaItem * jumlahItem;

  const span = document.createElement('span');
  span.textContent = `${namaItem} - Rp${hargaItem.toFixed(2)} x ${jumlahItem} = Rp${totalItemPrice.toFixed(2)}`;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const doneButton = document.createElement('button');
  doneButton.textContent = 'Selesai saatnya ngwe';
  doneButton.onclick = () => toggleDone(span);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.onclick = () => {
    deleteItem(li, totalItemPrice);
  };

  actions.appendChild(doneButton);
  actions.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(actions);

  itemList.appendChild(li);
  inputItem.value = '';
  inputPrice.value = '';
  inputQuantity.value = '';

  totalPrice += totalItemPrice;
  updateTotalPrice();
}

function toggleDone(item) {
  item.classList.toggle('done');
}

function deleteItem(item, itemPrice) {
  itemList.removeChild(item);
  totalPrice -= itemPrice;
  updateTotalPrice();
}

function updateTotalPrice() {
  totalPriceElement.textContent = totalPrice.toFixed(2);
}