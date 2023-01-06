window.addEventListener("load", () => {
  console.log(document.querySelectorAll(".checkk"));
  countOfTasks();
});

let tasks = document.querySelector(".tasks");
let tasks2 = document.querySelector(".tasks2");

tasks.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.tagName == "P") {
    e.target.classList.toggle("completed");
    countOfTasks();
  }

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    countOfTasks();
  }

  if (e.target.classList.contains("deleteAll")) {
    deleteAll();
    countOfTasks();
  }

  if (e.target.className == "addTask") {
    addNewTask();
    countOfTasks();
  }
});

const deleteAll = () => {
  document.querySelectorAll(".task p").forEach((a) => {
    if (a.classList.contains("completed")) {
      a.parentElement.remove();
    }
  });
};
// document.querySelector(".deleteAll").addEventListener("click", () => {
//   document.querySelectorAll(".task p").forEach((a) => {
//     if (a.classList.contains("completed")) {
//       a.parentElement.remove();
//     }
//   });
// });

let newTask = document.querySelector(".newTask");

let addTask = document.querySelector(".addTask");

// addTask.addEventListener("click", () => {
//   let task = document.createElement("div");
//   task.classList.add("task");

//   task.innerHTML = `
//         <p class="checkk">${newTask.value}</p>
//         <button class="delete">Delete</button>
//     `;

//   tasks2.appendChild(task);
//   newTask.value = "";
// });

const addNewTask = () => {
  let task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = `
        <p class="checkk">${newTask.value}</p>
        <button class="delete">Delete</button>
    `;

  tasks2.appendChild(task);
  newTask.value = "";
};

const countOfTasks = () => {
  let countTask = 0;
  let completedTask = 0;

  countTask = document.querySelectorAll(".task p").length;

  document.querySelectorAll(".task p").forEach((a) => {
    if (a.classList.contains("completed")) {
      completedTask++;
    }
  });

  document.querySelector(
    ".result"
  ).innerText = `Toplam görev sayısı ${countTask}, Tamamlanan görev sayısı ${completedTask}`;
};
