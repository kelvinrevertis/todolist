function addTask() {
    if (document.getElementById('task').value == "") {
        alert("Erro: lista vazia")
    } else {
        let task = document.getElementById('task').value

        let item = document.createElement('li')
        item.innerText = task 

        let check = document.createElement('input')
        check.type = "checkbox"
        check.value = item
        item.appendChild(check)
        document.getElementById("task-list").appendChild(item)

    }
}