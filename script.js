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

function copy() {
  var copy = document.getElementById("txtarea");

  copy.select();
  copy.setSelectionRange(0, 99999);

  document.execCommand("copy");

  window.alert("Copied!");
}

function onload() {

document.getElementById("txtarea").style.color = "black";
document.forms["textarea"]["text"].value = "start typing here..";
}

function about() {
window.alert("coming soon..");
}

function customize() {
window.alert("coming soon..")
}
