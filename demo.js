var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeOrEditItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append buttons to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input
  document.getElementById('item').value = '';
}

// Remove or Edit item
function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this item?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    } else if (e.target.classList.contains('edit')) {
      var li = e.target.parentElement;
      var itemText = li.firstChild;
      var newText = prompt('Edit the item:', itemText.textContent);
  
      if (newText !== null) {
        itemText.textContent = newText;
      }
    }
  }
  

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !== -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
