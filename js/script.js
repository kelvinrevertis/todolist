function addTask() {
    if (document.getElementById('task').value == "") {
        alert("Erro: lista vazia")
    } else {
        let task = document.getElementById('task').value

        let removeBtn = document.createElement("button")
        removeBtn.setAttribute("onClick", "removeTask(this)")
        removeBtn.setAttribute("class", "fa fa-trash")

        const item = document.createElement('li')
        item.innerHTML = `
            <input type="checkbox">
            <label>${task}</label>
            `

        item.appendChild(removeBtn)

        document.getElementById('task-list').appendChild(item)
    }
    document.getElementById('task').value = ""
}

function removeTask(button) {
    let itemDel = button.parentNode

    document.getElementById("task-list").removeChild(itemDel)
}