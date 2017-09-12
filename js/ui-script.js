renderList();

function renderList() {
  // get data from storage
  var data = stringToJson(getData());
  // get container from dom
  var container = document.getElementById('container');
  // loop data
  for(var i = 0; i < data.length; i++){
    // create div for each element in data
    var newDiv = document.createElement('div');
    // create img element
    var img = document.createElement('img');
    img.src = './assets/icon-delete.png';
    // set img element class
    img.setAttribute('class', 'icon');
    // set class for each div element
    newDiv.setAttribute('class', 'item-list')
    // set div content from data
    newDiv.innerHTML = data[i].name;
    // set click handler for each item-list
    newDiv.addEventListener('click', onItemClick.bind(this, data[i]));
    // set click handler for delete icon-delete
    img.addEventListener('click', deleteItem.bind(this, i));
    // attach the created child to container
    newDiv.appendChild(img);
    container.appendChild(newDiv);
  }
}
