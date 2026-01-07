document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const emptyImage = document.querySelector(".empty-image");
  const todosContainer = document.querySelector(".todos-container");

  const toggleEmptyImage = () => {
    emptyImage.style.display =
      taskList.children.length === 0 ? "block" : "none";
    todosContainer.style.display =
      taskList.children.length > 0 ? "100%" : "50%";
  };

  const addTask = (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) {
      return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
          <input type="checkbox" class="checkbox">
          <span>${taskText}</span>
          <div class="task-buttons">
          <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
          <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      toggleEmptyImage();
    });

    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyImage();
  };

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask(e);
    }
  });
});
