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

        let text = document.createElement('label')
        text.appendChild(document.createTextNode(task))

        item.appendChild(check)
        item.appendChild(text)

        document.getElementById("task-list").appendChild(item)
        let removeBtn = document.createElement("button")
        removeBtn.setAttribute("onClick", "removeTask(this)")
        removeBtn.setAttribute("class", "fa fa-trash")
        removeBtn.setAttribute("id","test-check")

        item.appendChild(removeBtn)
    }
}

function removeTask(button) {

    let itemDel = button.parentNode

    document.getElementById("task-list").removeChild(itemDel)
}

/*function addTask(){

    let task = document.getElementById('task').value

    let item = `<li><input type="checkbox"> ${task}</li>`
    item.setAtribute = "input"
    
    // item.appendChild(document.createTextNode(task))

    let list = document.getElementById("task-list")

    list.innerHTML = item

}*/