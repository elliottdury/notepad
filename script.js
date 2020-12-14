function save() {
var text = document.forms["textarea"]["text"].value
localStorage.setItem("text", text);
}

function retrieve() {
document.forms["textarea"]["text"].value = localStorage.getItem("text");
}

function remove() {
document.forms["textarea"]["text"].value = "";
}
