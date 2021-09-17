let name = document.getElementById("nickName");
let mando = ["만", "만두", "만두야 ", "만두야 코", "만두야 코딩", "만두야 코딩하", "만두야 코딩하자"];
let count = 0;

function buttonClicked() {
    name.innerHTML= mando[0];
}

function nameClicked() {
    count++;
    if (count >= 7) {
        count %= 7;
    }
    name.innerHTML= mando[count];
}