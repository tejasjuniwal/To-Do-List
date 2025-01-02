const ToDo = []
const tasks = document.querySelector(".todotasks")
const dueDateTaks = document.querySelector(".tododate")
const output = document.querySelector(".outputtask")


// renderToDoList();

function renderToDoList(){
    let ToDOHTML = ''

for (let i = 0; i < ToDo.length; i++) {
    const TodoList = ToDo[i]
    const {name , dueDate} = TodoList;
    const HTML = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <div><button onclick = "ToDo.splice(${i} , 1) renderToDoList()"  class = "Delete-Button">Delete</button></div>
    `
    ToDOHTML += HTML;
}
output.innerHTML = ToDOHTML;
tasks.value = ''
}




function added() {
    const inputValue = tasks.value ;
    const dueDateValue = dueDateTaks.value
    ToDo.push({
        name : inputValue ,
        dueDate : dueDateValue,
    })

    renderToDoList();
}