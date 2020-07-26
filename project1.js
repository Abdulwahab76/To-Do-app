var list = document.getElementById("list")

function add() {

    // crate node text
    var todo = document.getElementById("todo")
    var li = document.createElement("li")
    var text = document.createTextNode(todo.value)
    li.appendChild(text)
    todo.value = ""

    // create delete button
    var delbtn = document.createElement("button")
    var deltxt = document.createTextNode("Delete")

    // create edit button
    var editbtn = document.createElement("button")
    var edittxt = document.createTextNode("Edit")
    editbtn.appendChild(edittxt)
    li.appendChild(editbtn)
    editbtn.setAttribute("class", "btn")
    editbtn.setAttribute("onclick", "editbtn(this)")
    delbtn.appendChild(deltxt)
    delbtn.setAttribute("class", "btn")
    li.appendChild(delbtn)
    delbtn.setAttribute("onclick", "deleteitem(this)")
    list.appendChild(li)
}
function deleteitem(e) {
    e.parentNode.remove()
}
function Deleteall() {
    list.innerHTML = ""
}
function editbtn(e) {
    var val = prompt("Enter update value")
    e.parentNode.firstChild.nodeValue = val
}
function inputadd() {
    var inputAdd = document.getElementById("list")
    var inputele = document.createElement("input")
    inputele.setAttribute("type", "text");
    inputAdd.appendChild(inputele)
    inputAdd.setAttribute("class", "input1")

}