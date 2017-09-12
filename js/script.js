var name = 'data';
// retrieve data from local storage
var data = getData();
// call create function and pass some data
if(data == undefined){
  create(stamData);
}

// CREATE data in storage
function create(data) {
  localStorage.setItem(name, jsonToString(data));
}

// READ data from storage
function getData() {
  return localStorage.getItem(name);
}

// UPDATE data at given index
function update(index, stringToChange) {
  var stringData = getData();
  var jsonData = stringToJson(stringData);
  jsonData[index] = stringToChange;
  create(jsonData)
}

// DELETE item at given index
function deleteItem(index){
  var stringData = getData();
  var jsonData = stringToJson(stringData);
  jsonData.splice(index, 1);
  create(jsonData);
  var container  = document.getElementById('container');
  emptyElement(container);
  renderList();
}

function emptyElement(element){
  while (element.hasChildNodes()) { element.removeChild(element.lastChild) }
}

// convert Java Script Object Notation to string
function jsonToString(json){
  return JSON.stringify(json);
}

// convert string to Java Script Object Notation
function stringToJson(string) {
  return JSON.parse(string);
}

// when an item is clicked this function is called
function onItemClick(e){
  console.log(e)
}
