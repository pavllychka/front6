let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <div class="button-group">
        <button onclick="toggleTask(${index})" class="complete-btn ${task.completed ? 'completed-btn' : ''}">
          ${task.completed ? 'Скасувати' : 'Виконано'}
        </button>
        <button class="delete-btn" onclick="deleteTask(${index})">Видалити</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = '';
    saveTasks();
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function clearTasks() {
  tasks = [];
  localStorage.removeItem('tasks');
  renderTasks();
}
renderTasks();