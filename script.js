let addToDoButton = document.getElementById('addTask');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function deleteTodo(event) {
  const paragraph = event.target
  paragraph.parentNode.removeChild(paragraph)
  const currentTodo = paragraph.innerText
  console.log(currentTodo)
  todoList = todoList.filter(todo => {
    return todo.todo !== currentTodo
  })
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo(todo) {
  const paragraph = document.createElement("p")
  paragraph.innerText = todo.todo
  paragraph.classList.add('paragraph-styling')
  todoContainer.appendChild(paragraph)
  inputField.value = ""
  if(todo.done){
    paragraph.classList.toggle("todo-done")
  }
  paragraph.addEventListener("click", function (event) {
    todoList = todoList.map(todo => {
      if(todo.todo === event.target.innerText){
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    console.log(todoList)
    localStorage.setItem("todoList", JSON.stringify(todoList));
    paragraph.classList.toggle("todo-done")
  })
  paragraph.addEventListener("dblclick", deleteTodo)
}

addToDoButton.addEventListener("click", function () {
  // return if todo is empty
  if (!inputField.value)
    return;
  let todo = inputField.value;

  // don't add if already added
  for (let i = 0; i < todoList.length; i++) {
    let todo1 = todoList[i];
    if(todo1 === todo)
      return
  }

  // save todo list
  todoList.push({todo, done: false});
  localStorage.setItem("todoList", JSON.stringify(todoList));

  addTodo({todo, done: false})
})

for (let i = 0; i < todoList.length; i++) {
  addTodo(todoList[i])
}