document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".list");
  let draggedItem = null;

  list.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
    e.target.style.opacity = 0.5;
  });

  list.addEventListener("dragend", function (e) {
    e.target.style.opacity = "";
  });

  list.addEventListener("dragover", function (e) {
    e.preventDefault();
    const currentY = e.clientY;

    for (const element of list.children) {
      if (element !== draggedItem) {
        const elementCenter = element.offsetTop + element.offsetHeight / 2;
        if (currentY < elementCenter) {
          list.insertBefore(draggedItem, element);
          break;
        }
      }
    }
  });
});
