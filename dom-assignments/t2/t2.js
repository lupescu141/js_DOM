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
  var li = document.createElement("LI");
  var liInput = document.createElement("INPUT");
  liInput.setAttribute("type", "checkbox");
  liInput.setAttribute("id", JSON.stringify(element.id));
  li.appendChild(liInput);
  var liLabel = document.createElement("LABEL");
  liLabel.setAttribute("for", JSON.stringify(element.id));
  var textnode = document.createTextNode(JSON.stringify(element.task));
  liLabel.appendChild(textnode);
  li.appendChild(liLabel)
  ul.appendChild(li);
  document.getElementById(`${element.id}`).checked = element.completed;
});
