document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;  // No empty tasks

        const taskItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        const deleteBtn = document.createElement('button');

        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', toggleComplete);
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        taskItem.textContent = taskText;
        taskItem.prepend(taskCheckbox);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';  // Clear input
    }

    function toggleComplete(event) {
        const taskItem = event.target.parentElement;
        if (event.target.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    }

    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});


