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
    const HTML = `<p>
    ${name} ${dueDate}
    <button onclick = "
    ToDo.splice(${i} , 1)
    renderToDoList() ;
    " >Delete</button>
    </p>`
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