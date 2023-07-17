var form = document.getElementById('addForm');
var itemList =  document.getElementById('items');
var filter = document.getElementById('filter')
 // form submit

 form.addEventListener('submit', addItem);
// Delete event
 itemList.addEventListener('click', removeOrEditItem);
 // filter 
 filter.addEventListener('keyup', filterItems);

 function addItem(e){
    e.preventDefault();
    // get the value
    var newItem= document.getElementById('item').value;
    // create new li
   var li = document.createElement('li');
    // Add class
   li.className = 'list-group-item';
    // Add text node with input value
   li.appendChild(document.createTextNode(newItem));
  // Create delete button element
   var deleteBtn = document.createElement('button');
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);
 // Create edit button element
 var editBtn = document.createElement('button');
 editBtn.className= 'btn btn-danger btn-sm float-right ';
 editBtn.appendChild(document.createTextNode('edit'));
 li.appendChild(editBtn);
   // Append li to list
   itemList.appendChild(li);
   
 }
// Remove or Edit item
function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are you sure you want to delete this item?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    } else if (e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        var itemText = li.firstChild;
        var newText = prompt('Enter the new text:', itemText.textContent);
        if(newText !== null ){
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
  