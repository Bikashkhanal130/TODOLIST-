function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");

        // Create a checkbox for marking task as completed
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            if (this.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        };
        li.appendChild(checkbox);

        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);

        // Add a close button to the list item
        var closeButton = document.createElement("span");
        var closeText = document.createTextNode("\u00D7");
        closeButton.className = "close";
        closeButton.appendChild(closeText);
        closeButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(closeButton);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding task
        taskInput.value = "";
    }
}

function removeAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
