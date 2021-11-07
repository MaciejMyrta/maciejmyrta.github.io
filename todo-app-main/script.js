const themeSwitch = document.querySelector('.btn-theme');
const input = document.querySelector('#todo-input > input');
const todoTower = document.querySelector('#todo-tower');
const tasksContainer = document.querySelector('.tasks-container');
const todoTasks = document.querySelectorAll('.todo-task');
const completeCheck = document.querySelectorAll('.complete-check');
const deleteTask = document.querySelectorAll('.delete-task');
const btnOptions = document.querySelectorAll('.btn-options');
const clearCompleted = document.querySelectorAll('.clear-completed');
const mobilePanel = document.querySelector('.mobile-panel');
const desktopPanel = document.querySelector('.desktop-panel');


// Function checks which information panel should be opened - the mobile or the desktop one
const openProperPanel = () => {
    window.innerWidth >= 768 ? 
    desktopPanel.style = "display: block" :
    mobilePanel.style = "display: block"
};

// Function wich enables or disables the information about empty tasks list
const checkAnyTasks = () => {
    if (document.querySelectorAll('.todo-task').length > 0) {
        document.getElementById('tasks-empty').style = 'display: none';
        todoTower.style = "border-radius: 8px 8px 0px 0px"
        openProperPanel();
    } 
    else {
        document.getElementById('tasks-empty').style = 'display: flex';
        desktopPanel.style = "display: none";
        mobilePanel.style = "display: none";
        todoTower.style = "border-radius: 8px"
    };
};

// Update the active (created but not completed) tasks count
const updateCount = () => {
    let allTasks = document.querySelectorAll('.todo-task').length;
    let completedTasks = document.querySelectorAll('.completed').length;
    let value = 0;
    if (allTasks > 0) {
        value = allTasks - completedTasks;
    };
    for (count of document.querySelectorAll('.count')) {
        count.textContent = `${value}`;
    };
};

// Save the shape of tasks container div into localStorage
const saveTasks = () => {
    updateCount();
    checkAnyTasks();
    if (document.querySelectorAll('.todo-task').length > 0) {
        localStorage.setItem('tasks', tasksContainer.innerHTML);
    }
    else {
        if (localStorage.getItem('tasks')) {
            localStorage.removeItem('tasks');
        };
    };

};

// Function which loads all the content regarding theme 
// selection and tasks setup from localStorage
const loadFromStorage = () => {
    let whichTheme = localStorage.getItem('themeSwitch');

    if (whichTheme) {
        whichTheme == "light" ? 
        document.body.className = "theme-light" :
        document.body.className = "theme-dark";
    }
    else {
        document.body.className = "theme-dark";
    };

    if (localStorage.getItem('tasks')) {
        document.querySelector('#tasks-empty').style = "display: none";
        tasksContainer.innerHTML = localStorage.getItem('tasks');

        document.querySelectorAll('.todo-task').forEach((item) => {
            item.classList.remove('dragging');
            if (item.classList.contains('completed')) {
                item.querySelector('.complete-check').checked = true;
            };
        });

        checkAnyTasks();
        updateCount();
    };
};

loadFromStorage();

// Change the color theme on button click
themeSwitch.addEventListener('click', () => {
    
    if (document.body.className == "theme-dark") {
        (document.body.className = "theme-light");
        localStorage.setItem('themeSwitch', 'light');
    } 
    else {
        (document.body.className = "theme-dark");
        localStorage.setItem('themeSwitch', 'dark');
    }
});

// Todo input handling
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && event.target.value !== "") {
        const newDiv = document.createElement("div");
        newDiv.className = "todo-line todo-task";
        newDiv.setAttribute('draggable', true);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "complete-check"
        const cancelTask = document.createElement('button');
        cancelTask.className = "delete-task";
        newDiv.append(checkbox);
        newDiv.append(event.target.value);
        newDiv.append(cancelTask);
        document.getElementById('tasks-empty').style = 'display: none';
        tasksContainer.appendChild(newDiv);
        event.target.value = '';
        saveTasks();
    };
});

// Todo buttons handling - marking as complete and deleting whole task
todoTower.addEventListener('click', function(e) {

    if (e.target.classList.contains('complete-check')) {
        let task = e.target.parentNode;
        if (e.target.checked) {
            task.classList.add('completed');
            task.style = "text-decoration: line-through";
        }
        else {
            task.classList.remove('completed');
            task.style = 'text-decoration: none';
        };
        saveTasks();
    };

    if (e.target.classList.contains('delete-task')) {
        let taskToDelete = e.target.parentNode;
        taskToDelete.parentElement.removeChild(taskToDelete);
        saveTasks();
    };
});

// Changing the 'options' between All/Active/Completed
for (let btn of btnOptions) {
    btn.addEventListener('click', (event) => {
        for (let btn of btnOptions) {
            btn.classList.remove("active");
        };
        event.target.classList.add("active");
    });
};

// Display All/Active/Completed tasks in the tower
for (let option of btnOptions) {
    option.addEventListener('click', (event) => {
        for (let task of document.querySelectorAll('.todo-task')) {
            if (event.target.classList.contains('btn-all')) {
                task.style = "display: flex";
                if (task.classList.contains('completed')) {
                    task.style = "text-decoration: line-through";
                };
            };
    
            if (event.target.classList.contains('btn-active')) {
                task.classList.contains('completed') ? 
                task.style = "display: none" :
                task.style = "display: flex";
            };
    
            if (event.target.classList.contains('btn-completed')) {
                task.classList.contains('completed') ? 
                task.style = "display: flex; text-decoration: line-through" :
                task.style = "display: none";
            };
        };
    });
};

// Delete tasks marked as 'Completed'
for(let clear of clearCompleted) {
    clear.addEventListener('click', () => {
        for (let task of document.querySelectorAll('.todo-task')) {
            if (task.classList.contains('completed')) {
                task.parentNode.removeChild(task);
                saveTasks();
            };
        };
    });
};

// Function to switch the information panel if user resizes the window width;
let initialWidth = window.innerWidth;

window.addEventListener("resize", () => {

    if (window.innerWidth != initialWidth) {

        if (window.innerWidth < 768) {
            if (desktopPanel.style.display == "block") {
                desktopPanel.style = "display: none";
                mobilePanel.style = "display: block";
            }
        }

        else {
            if (mobilePanel.style.display == "block") {
                mobilePanel.style = "display: none";
                desktopPanel.style = "display: block";
            }
        };

        initialWidth = window.innerWidth;
    };
});

// Drag and Drop functionality
tasksContainer.addEventListener('dragstart', function(e) {
    if(e.target.classList.contains('todo-task')) {
        e.target.classList.add('dragging');
    };
});

tasksContainer.addEventListener('dragend', function(e) {
    if(e.target.classList.contains('todo-task')) {
        e.target.classList.remove('dragging');
    };
});

const findDragPlace = (y) => {
    let targetElements = [...tasksContainer.querySelectorAll('.todo-task:not(.dragging)')];

    return targetElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        }
        else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
};

tasksContainer.addEventListener('dragover', task => {
    task.preventDefault();
    let afterElement = findDragPlace(task.clientY);
    let draggable = document.querySelector('.dragging');

    afterElement == null ? 
    tasksContainer.appendChild(draggable) : 
    tasksContainer.insertBefore(draggable, afterElement);
    saveTasks();
});

