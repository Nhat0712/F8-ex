document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".list");
  let draggedItem = null;

  list.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
    e.target.style.opacity = 0.5;
  });

  list.addEventListener("dragend", function (e) {
    e.target.style.opacity = "";
    updateOrder();
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
        } else if (Array.from(list.children).indexOf(element) === list.children.length - 1) {
          list.appendChild(draggedItem);
        }
      }
    }
  });

  function updateOrder() {
    const items = Array.from(list.children);
    let lessonCount = 1;
    items.forEach((item, index) => {
      const prefix = item.querySelector("span").previousSibling.textContent.trim().split(":")[0];
      if (prefix.startsWith("Bài")) {
        item.querySelector("span").previousSibling.textContent = `Bài ${lessonCount}: `;
        lessonCount++;
      } else if (prefix.startsWith("Chương")) {
        const chapterIndex = Math.ceil(lessonCount / 4); // Assuming 4 lessons per chapter
        item.querySelector("span").previousSibling.textContent = `Chương ${chapterIndex}: `;
      }
    });
  }
});
