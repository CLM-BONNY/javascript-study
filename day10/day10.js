function btnclicked() {
    document.getElementById('number').style.display = "none";
    document.getElementById('btn').style.display = "none";
    document.getElementById('name').style.display = "block";
    document.getElementById('phoneNum').style.display = "block";
}
function call() {
    setTimeout("btnclicked()", 2000);
}
document.getElementById('btn').addEventListener('click', call)