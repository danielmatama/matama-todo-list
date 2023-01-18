// import _ from "lodash";
import "./style.css";

const taskArray = [
  {
    descriptions: "Attend meeting",
    completed: true,
    index: 3,
  },
  {
    descriptions: "Go to the gym",
    completed: false,
    index: 0,
  },
  {
    descriptions: "Have lunch",
    completed: true,
    index: 1,
  },
  {
    description: "Call the boss",
    completed: false,
    index: 2,
  },
];

const list = document.getElementById("order");

const createList = () => {
  const sortedArray = taskArray.sort((a, b) => a.index - b.index);
  sortedArray.forEach((task) => {
    const eachTask = document.createElement("li");
    eachTask.innerHTML = `<div id="eachTask">
        <div><input type="checkbox" name=" " class="task">
        <label for="" class="task-label">${task.descriptions}</label></div>
        <i class="fa fa-ellipsis-v"></i>
        </div><hr>`;
    list.appendChild(eachTask);
  });
};

document.addEventListener("DOMContentLoaded", createList);