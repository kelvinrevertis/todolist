const tasks = document.getElementById('task')
const list = document.getElementById('task-list')

const tasksList = [
    {id:1,name:'Teste'},
    {id:2,name:'Nova Tarefa'},
    {id:3,name:'Compras'},
    {id:4,name:'Caminhada'},
]

const addTask = tasks =>{
    const li = document.createElement('li')
    li.innerHTML= `
    <input type="checkbox">${tasks.name}
    <button>X</button>`
    
    list.prepend(li)
}

const showList =()=>{

    tasksList.forEach(addTask)

}

showList()