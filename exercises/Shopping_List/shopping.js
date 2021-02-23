const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };

  // Push the items into our state
  items.push(item);

  // Clear the form
  // e.currentTarget.item.value = '';
  e.target.reset();

  // Fire off a custom event that will tell anyone else who cares
  // that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
    <input 
    value="${item.id}" 
    type="checkbox"
    ${item.complete ? 'checked' : ''}
    >
    <span class="itemName">${item.name}</span>
    <button 
    aria-label="Remove ${item.name}"
    value="${item.id}"
    >&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
    console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    // pull item from local storage
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length) {
        items = lsItems;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    // update our items array without this id
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    const itemRef = items.find(item => item.id === id);
   itemRef.complete = !itemRef.complete;
   list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Event Delegation: We listen for the click on the list <ul> but then delegate
// the click over to the button if that is what was clicked
list.addEventListener('click', function(e) {
    const id = parseInt(e.target.value)
    if(e.target.matches('button')) {
        deleteItem(id);
    }
    if(e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
})

restoreFromLocalStorage();
