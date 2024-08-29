// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
var ul = document.getElementById("todo");

todoList.forEach(element => {
  ul.insertAdjacentHTML('beforeend', `<li><input type="checkbox" id="${JSON.stringify(element.id)}"></li><label for="${JSON.stringify(element.id)}">${JSON.stringify(element.task)}</label>`);
  document.getElementById(`${element.id}`).checked = element.completed;

});
