let movies;
let list = [];
let movie;
let all = document.getElementById('mvlist');

function add() {
    movies = prompt("영화제목, 개봉연도, 장르를 입력하세요").split(',');
    list.push({ name: movies[0], year: movies[1], genre: movies[2] });
}

function del() {
    movie = prompt("영화제목을 입력하세요");
    for (let i = 0; i < list.length; i++) {
        if (movie === list[i].name) {
            list.splice(i, 1);
        } else {
            break;
        }
    }
}

function confirm() {
    all.innerHTML = "인생영화 리스트";
    for (let i = 0; i < list.length; i++) {
        all.innerHTML += "</br>" + "✅" + list[i].name + " ," + list[i].year + " ," + list[i].genre + "</br>";
    }
}