const tasks = document.getElementById('task')
const list = document.getElementById('task-list')
const form = document.getElementById('task-form')

const localStorageTasks = JSON.parse(localStorage.getItem('tasksList'))
let tasksList = localStorage.getItem('tasksList') !== null ? localStorageTasks : []

const removeTask = id =>{
    tasksList =  tasksList.filter(task => task.id !== id)
    updateLocalStorage()
    showList()
}

const addTask = tasks =>{
    const li = document.createElement('li')
    li.innerHTML= `
    <input type="checkbox"><label>${tasks.name}</label>
    <button onClick="removeTask(${tasks.id})" class="fa fa-trash"></button>`
    
    list.prepend(li)
}

const showList =()=>{
    list.innerHTML=''
    tasksList.forEach(addTask)

}

showList()

const updateLocalStorage = () => {
    localStorage.setItem('tasksList', JSON.stringify(tasksList))
}

const generateID = () => Math.round(Math.random()*1000)

form.addEventListener('submit', event =>{
    event.preventDefault()

    if(tasks.value ===''){
        alert('Preencha o campo de tarefas!')
        return
    }
    const task = {id:generateID(), name: tasks.value}

    tasksList.push(task)
    showList()
    updateLocalStorage()

    task.value = ''
})