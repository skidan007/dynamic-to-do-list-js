// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  loadTasks();

  // Function to add a new task
  function addTask(taskText, save = true) {
    // If taskText is not provided (e.g. from input), get from input field
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    // Validate input
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Task Creation and Removal
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove task on button click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    // Append button and list item to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save task to localStorage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = '';
  }

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(task => addTask(task, false));
  }

  // Function to remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Add task when clicking the Add button
  addButton.addEventListener('click', () => {
    addTask();
  });

  // Add task when pressing Enter
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});