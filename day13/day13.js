let count = 0;
let default_text = document.getElementById("cloth");
let default_background = document.getElementById("body");
let val = document.getElementById("input_text").value;

function input_check() {
    if (val <= 4) {
        count++;
        console.log("패딩, 두꺼운코드, 목도리, 기모제품");
        default_background.style.backgroundColor = "white";
        default_text.innerHTML = "겨울이야." + "</br>" + "따뜻하게 입어 !";
        count_check();
    } else if (5 <= val && val <= 8) {
        count++;
        console.log("코트, 가죽자켓, 니트, 레깅스");
        default_background.style.backgroundColor = "white";
        default_text.innerHTML = "겨울이야." + "</br>" + "따뜻하게 입어 !";
        count_check();
    } else if (9 <= val && val <= 11) {
        count++;
        default_background.style.backgroundColor = "saddlebrown";
        console.log("자켓, 트렌치코트, 니트, 청바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + "날씨 좋다 !";
        default_text.style.color = "white";
        count_check();
    } else if (12 <= val && val <= 16) {
        count++;
        default_background.style.backgroundColor = "saddlebrown";
        console.log("자켓, 가디건, 야상, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + "날씨 좋다 !";
        default_text.style.color = "white";
        count_check();
    } else if (17 <= val && val <= 19) {
        count++;
        default_background.style.backgroundColor = "gold";
        console.log("얇은니트, 맨투맨, 가디건, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + "날씨 좋다 !";
        default_text.style.color = "white";
        count_check();
    } else if (20 <= val && val <= 22) {
        count++;
        default_background.style.backgroundColor = "gold";
        console.log("얇은가디건, 긴팔, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + "날씨 좋다 !";
        default_text.style.color = "white";
        count_check();
    } else if (23 <= val && val <= 27) {
        count++;
        default_background.style.backgroundColor = "green";
        console.log("반팔, 얇은셔츠, 반바지, 면바지");
        default_text.innerHTML = "여름이야." + "</br>" + "어우 더워 !";
        default_text.style.color = "white";
        count_check();
    } else {
        count++;
        default_background.style.backgroundColor = "green";
        console.log("민소매, 반팔, 반바지, 원피스");
        default_text.innerHTML = "여름이야." + "</br>" + "어우 더워 !";
        default_text.style.color = "white";
        count_check();
    }


}

function count_check() {
    if (count === 3) {
        default_text.innerHTML = "오늘 기온이" + "</br>" + " 여러번 바뀌나 ?";
    } else if (count === 4) {
        default_text.innerHTML = "아무 숫자나" + "</br>" + " 막 누르고 있지 !";
    } else if (count === 5) {
        default_text.innerHTML = "잘못 누른건가 ?";
    } else if (count >= 6) {
        default_text.innerHTML = "이제 계절" + "</br>" + "안 알려줄 거야!";
    }
}