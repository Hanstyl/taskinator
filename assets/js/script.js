var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function (event) {

    event.preventDefault();
    
    var listItemEl = document.createElement("li");      //Create a new task item
    listItemEl.className = "task-item";                 //Style the new task item
    listItemEl.textContent = "This is a new task.";     //Add the text
    tasksToDoEl.appendChild(listItemEl);                //Append this element to the task list
}

formEl.addEventListener("submit", createTaskHandler);  //needs to go after the createTaskHandler function or it breaks the code.