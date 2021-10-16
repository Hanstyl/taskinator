var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;  // by adding .value----Now the value of the taskNameInput variable will be the text we entered in the <input> element.
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // Create list item
    var listItemEl = document.createElement("li");      //Create a new task item
    listItemEl.className = "task-item";                 //Style the new task item

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";  // Give it a class name

    // Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);               
}

formEl.addEventListener("submit", createTaskHandler);  //needs to go after the createTaskHandler function or it breaks the code.