const btnAdd = document.querySelector(".btn-add");
const todoAdd = document.querySelector("#todo-add");
const taskList = document.querySelector(".task-list");

btnAdd.addEventListener("click", function () {
  // khai báo
  var task = document.createElement("li");
  var contentTask = document.createElement("p");
  var fixTask = document.createElement("div");
  var btnUpdate = document.createElement("i");
  var btnDelete = document.createElement("i");

  // thiết lập nội dung và thuộc tính
  btnUpdate.classList.add("fa-regular", "fa-pen-to-square", "update");
  btnDelete.classList.add("fa-solid", "fa-trash", "delete");
  var memo = todoAdd.value;

  // gán nội dung và thuộc tính
  fixTask.appendChild(btnUpdate);
  fixTask.appendChild(btnDelete);
  fixTask.style.display = "flex";
  fixTask.style.gap = "10px";
  task.appendChild(contentTask);
  task.appendChild(fixTask);
  contentTask.textContent = todoAdd.value;

  // kiểm tra chuỗi trống
  if (todoAdd.value.trim() === "") {
    alert("Vui lòng nhập lại công việc");
    todoAdd.value = "";
  } else {
    taskList.appendChild(task);

    // nút Xóa
    btnDelete.addEventListener("click", function () {
      task.remove();
    });

    // nút Sửa
    btnUpdate.addEventListener("click", function () {
      var contentUpdate = document.createElement("input");
      var btnAddUpdate = document.createElement("button");
      btnAddUpdate.textContent = "Add Task";
      contentUpdate.value = memo;

      // gán nội dung và thuộc tính khi sửa
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
