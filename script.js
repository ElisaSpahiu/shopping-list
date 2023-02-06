var listInput = document.getElementById("new-list"); 
var addButton = document.getElementsByTagName("button")[0]; 
var listHolder = document.getElementById("completed"); 

var createNewListElement = function (listString) {
  var listItem = document.createElement("li");
  
  var label = document.createElement("label"); 

  var deleteButton = document.createElement("button"); 
  label.innerText = listString;
  deleteButton.innerText = "Fshi";
  deleteButton.className = "delete";
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

var addTask = function () {

  var listItem = createNewListElement(listInput.value);

  listHolder.appendChild(listItem);
  listEvents(listItem, listCompleted);
  
  listInput.value = "";
};

var deleteList = function () {
  
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

var listCompleted = function () {
    var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
};

addButton.addEventListener("click", addTask);

var listEvents = function (taskListItem, deletteList) {
  
  var deleteButton = taskListItem.querySelector("button.delete");
  deleteButton.onclick = deleteList;
  };


