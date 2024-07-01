const btnAdd = document.querySelector(".btn-add");
const todoAdd = document.querySelector("#todo-add");
const taskList = document.querySelector(".task-list");

btnAdd.addEventListener("click", function () {
  // khai báo
  var task = document.createElement("li");
  var contentTask = document.createElement("p");
  var fixTask = document.createElement("div");
  var newContent = '<i class="fa-regular fa-pen-to-square update"></i>';
  newContent += '<i class="fa-solid fa-trash delete"></i>';
  var memo = todoAdd.value;
  // gán
  fixTask.innerHTML = newContent;
  fixTask.style.display = "flex";
  fixTask.style.gap = "10px";
  task.appendChild(contentTask);
  task.appendChild(fixTask);
  contentTask.textContent = todoAdd.value;
  // check chuỗi trống
  if (todoAdd.value.trim() === "") {
    console.log(alert("Vui lòng nhập lại công việc"));
    todoAdd.value = "";
  } else {
    taskList.appendChild(task);
    // btn Delete
    var btnDelete = document.querySelector(".delete");
    btnDelete.addEventListener("click", function () {
      task.remove();
    });
    // btn Update
    var btnUpdate = document.querySelector(".update");
    btnUpdate.addEventListener("click", function () {
      var contentUpdate = document.createElement("input");
      var btnAddUpdate = document.createElement("button");
      btnAddUpdate.textContent = "Add Task";
      contentUpdate.value = memo;
      task.appendChild(contentUpdate);
      task.appendChild(btnAddUpdate);
      contentTask.remove();
      fixTask.remove();
      task.style.padding = 0;
      contentUpdate.placeholder = "Update task";
      contentUpdate.classList.add("contentUpdate");
      btnAddUpdate.classList.add("btnAddUpdate");
      btnAddUpdate.addEventListener("click", function () {
        task.appendChild(contentTask);
        task.appendChild(fixTask);
        contentTask.textContent = contentUpdate.value;
        contentUpdate.remove();
        btnAddUpdate.remove();
        task.style.padding = "20px";
        memo = contentUpdate.value;
      });
    });
    // reset input todo
    todoAdd.value = "";
  }
});
