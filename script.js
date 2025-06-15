 // Ensure DOM is fully loaded before running the script
    document.addEventListener('DOMContentLoaded', () => {

      // Select necessary DOM elements
      const addButton = document.getElementById('add-button');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Function to add a new task to the list
      function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim user input

        if (taskText === '') {
          alert('Please enter a task.');
          return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove this task
        removeBtn.onclick = () => {
          taskList.removeChild(li);
        };

        // Append remove button to list item, and list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
      }

      // Add task on button click
      addButton.addEventListener('click', addTask);

      // Add task on pressing Enter key
      taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          addTask();
        }
      });
    });