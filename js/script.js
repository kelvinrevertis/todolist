function addTask() {

    if (document.getElementById('task').value == "") {
        alert("Erro: lista vazia")
    } else {
        //valor digitado no input
        let task = document.getElementById('task').value

        //criar li
        let item = document.createElement('li')

        let check = document.createElement('input')
        check.type = "checkbox"

        item.appendChild(check)

        item.appendChild(document.createTextNode(task))

        document.getElementById("task-list").appendChild(item)

    }
}

/*function addTask(){

    let task = document.getElementById('task').value

    let item = `<li><input type="checkbox"> ${task}</li>`
    item.setAtribute = "input"
    
    // item.appendChild(document.createTextNode(task))

    let list = document.getElementById("task-list")

    list.innerHTML = item

}*/