document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => appendTaskToDOM(task));
}

function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const task = {
            id: Date.now(),
            text: taskValue
        };
        appendTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = '';
    }
}

function appendTaskToDOM(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `${task.text} <button class="edit" onclick="editTask(${task.id})">Edit</button><button class="delete" onclick="deleteTask(${task.id})">Delete</button>`;
    taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    document.querySelector(`li[data-id='${taskId}']`).remove();
}

function editTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskToEdit = tasks.find(task => task.id === taskId);
    taskInput.value = taskToEdit.text;
    
    deleteTask(taskId); // Remove the task from the list temporarily
}
