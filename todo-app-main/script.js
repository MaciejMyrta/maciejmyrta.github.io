const themeSwitch = document.querySelector('.btn-theme');
const input = document.querySelector('#todo-input > input');
const todoTower = document.querySelector('#todo-tower');
const completeCheck = document.querySelectorAll('.complete-check');
const deleteTask = document.querySelectorAll('.delete-task');
const btnOptions = document.querySelectorAll('.btn-options');
const clearCompleted = document.getElementById('clear-completed');

const checkAnyTasks = () => {
    document.querySelectorAll('.todo-task').length > 0 ?
    document.getElementById('tasks-empty').style = 'display: none' :
    document.getElementById('tasks-empty').style = 'display: flex';
};

const updateCount = () => {
    let allTasks = document.querySelectorAll('.todo-task').length;
    let completedTasks = document.querySelectorAll('.completed').length;
    let value = 0;
    if (allTasks > 0) {
        value = allTasks - completedTasks;
    }
    document.getElementById('count').textContent = `${value}`;
}


themeSwitch.addEventListener('click', () => {
    (document.body.className == "theme-dark") ? 
    (document.body.className = "theme-light") : 
    (document.body.className = "theme-dark");
});

// Todo input handling
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && event.target.value !== "") {
        const newDiv = document.createElement("div");
        newDiv.className = "todo-line todo-task";
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "complete-check"
        const cancelTask = document.createElement('button');
        cancelTask.className = "delete-task";
        newDiv.append(checkbox);
        newDiv.append(event.target.value);
        newDiv.append(cancelTask);
        document.getElementById('tasks-empty').style = 'display: none';
        todoTower.appendChild(newDiv);
        event.target.value = '';
        updateCount();
    };
});

// Todo buttons handling - marking as complete and deleting whole task
todoTower.addEventListener('click', function(e) {

    if (e.target.classList.contains('complete-check')) {
        let task = e.target.parentNode;
        if (e.target.checked) {
            task.classList.add('completed');
            updateCount();
            // task.style = "text-decoration: line-through";
        }
        else {
            task.classList.remove('completed');
            updateCount();
            // task.style = 'text-transform: none';
        };
    };

    if (e.target.classList.contains('delete-task')) {
        let taskToDelete = e.target.parentNode;
        taskToDelete.parentElement.removeChild(taskToDelete);
        checkAnyTasks();
        updateCount();
    };
});

// Changing the 'options' between All/Active/Completed
for (let btn of btnOptions) {
    btn.addEventListener('click', (event) => {
        for (let btn of btnOptions) {
            btn.classList.remove("active");
        }
        event.target.classList.add("active");
    })
};


// Display All/Active/Completed tasks in the tower
for (let option of btnOptions) {
    option.addEventListener('click', (event) => {
        for (let task of document.querySelectorAll('.todo-task')) {
            if (event.target.id == "btn-all") {
                task.style = "display: flex";
            };
    
            if (event.target.id == "btn-active") {
                task.classList.contains('completed') ? 
                task.style = "display: none" :
                task.style = "display: flex";
            };
    
            if (event.target.id == "btn-completed") {
                task.classList.contains('completed') ? 
                task.style = "display: flex" :
                task.style = "display: none";
            };
        };
    });
};

// Delete tasks marked as 'Completed'
clearCompleted.addEventListener('click', () => {
    for (let task of document.querySelectorAll('.todo-task')) {
        if (task.classList.contains('completed')) {
            task.parentNode.removeChild(task);
            checkAnyTasks();
            updateCount();
        };
    };
});

