// Wait for the DOM to fully load before executing any script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Task list container

    // Define the function responsible for adding a task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function early
        }

        // Create a new <li> element and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new <button> element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign an onclick event to the remove button to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li> element
        li.appendChild(removeBtn);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Attach an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding a task with the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
