// Wait for the HTML document to fully load before running JavaScript
    document.addEventListener('DOMContentLoaded', () => {

      // Select DOM elements
      const addButton = document.getElementById('add-task-btn');
      const taskInput = document.getElementById('task-input');
      const taskList = document.getElementById('task-list');

      // Function to add a task to the list
      function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Alert the user if input is empty
        if (taskText === '') {
          alert('Please enter a task.');
          return;
        }

        // Create a new <li> element and set its text content
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button and set its properties
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Set up the onclick event to remove the task
        removeBtn.onclick = () => {
          taskList.removeChild(li);
        };

        // Append the button to the list item and the item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
      }

      // Event listener for the "Add Task" button
      addButton.addEventListener('click', addTask);

      // Event listener to add task on Enter key
      taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          addTask();
        }
      });

      // Optionally invoke addTask here on DOMContentLoaded (example placeholder logic)
      // You can uncomment below if you want to auto-add a default task
      // addTask();
    });