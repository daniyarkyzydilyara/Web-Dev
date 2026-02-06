// Select DOM elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the LI container
    const li = document.createElement("li");
    li.className = "todo-item";

    // 2. Create the checkbox (Mark as Done)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    // 3. Create the text span
    const span = document.createElement("span");
    span.textContent = taskText;

    // 4. Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
        // Using removeChild as requested (could also use li.remove())
        todoList.removeChild(li);
    });

    // 5. Append elements to the LI, then LI to the UL
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // 6. Clear input and refocus
    todoInput.value = "";
    todoInput.focus();
}

// Event listener for the "Add" button
addBtn.addEventListener("click", addTask);

// Allow adding task by pressing "Enter" key
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
