let form = document.getElementById("form")
let input = document.getElementById("input")
let todo = document.getElementById("todo")

let listTodo = JSON.parse(localStorage.getItem("ListToDo")) || []
form.addEventListener("submit", function(){
    let todo = input.value
    listTodo.push(todo)
    localStorage.setItem("ListToDo", JSON.stringify(listTodo))
})