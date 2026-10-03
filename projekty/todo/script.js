const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");

    task.textContent = taskText;

    task.addEventListener("click", () => {
        task.remove();
    });

    taskList.appendChild(task);

    taskInput.value = "";
});