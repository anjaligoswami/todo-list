let addToDoButton = document.getElementById('addTask');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

let todoList = JSON.parse(localStorage.getItem ("todoList")) || [];

function delete_todo(event){
           paragraph = event.target
for(let i=0; i<todoList.length; i++)
{
    let todo = todoList[i];

    var paragraph = document.createElement("li");
    
    paragraph.innerText = todo;
    paragraph.classList.add('paragraph-styling')
    todoContainer.appendChild(paragraph)
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener("dblclick", function () {
        todoContainer.removeChild(paragraph)
    })

}
addToDoButton.addEventListener("click", function () {
    if (inputField.value == "")
        return;
    let todo = inputField.value;
    console.log(todoList)
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));

    var paragraph = document.createElement("li");
    
    paragraph.innerText = inputField.value;
    paragraph.classList.add('paragraph-styling')
    todoContainer.appendChild(paragraph)
    inputField.value = ""
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener("dblclick", function () {
        todoContainer.removeChild(paragraph)
    })
})