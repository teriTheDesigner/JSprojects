document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const button = document.querySelector("#addTask");
  const list = document.querySelector(".list");
  const template = document.querySelector("#taskTemplate");

  button.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue !== "") {
      const clone = template.content.cloneNode(true);

      const taskDescription = clone.querySelector(".taskDescription");
      taskDescription.textContent = inputValue;

      const taskElement = clone.querySelector(".task");

      const removeButton = taskElement.querySelector(".trash");
      removeButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event bubbling
        removeTask(taskElement);
      });

      taskElement.addEventListener("click", () => {
        finishedTask(taskElement);
        sortTasks();
      });

      list.prepend(clone);

      input.value = "";
    }
  });

  function removeTask(taskElement) {
    taskElement.remove();
  }

  function finishedTask(taskElement) {
    taskElement.querySelector(".taskDescription").classList.toggle("cross");
    const icons = taskElement.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.classList.toggle("hidden");
    });
  }
});
