function input_check() {
    let default_text = document.getElementById("cloth");
    let default_background = document.getElementById("body");
    let val = document.getElementById("input_text").value;

    if (val <= 4) {
        console.log("패딩, 두꺼운코드, 목도리, 기모제품");
        default_background.style.backgroundColor = "white";
        default_text.innerHTML = "겨울이야." + "</br>" + "따뜻하게 입어 !";
    } else if (5 <= val && val <= 8) {
        console.log("코트, 가죽자켓, 니트, 레깅스");
        default_background.style.backgroundColor = "white";
        default_text.innerHTML = "겨울이야." + "</br>" + " 따뜻하게 입어 !";
    } else if (9 <= val && val <= 11) {
        default_background.style.backgroundColor = "saddlebrown";
        console.log("자켓, 트렌치코트, 니트, 청바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + " 날씨 좋다 !";
        default_text.style.color = "white";
    } else if (12 <= val && val <= 16) {
        default_background.style.backgroundColor = "saddlebrown";
        console.log("자켓, 가디건, 야상, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + " 날씨 좋다 !";
        default_text.style.color = "white";
    } else if (17 <= val && val <= 19) {
        default_background.style.backgroundColor = "gold";
        console.log("얇은니트, 맨투맨, 가디건, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + " 날씨 좋다 !";
        default_text.style.color = "white";
    } else if (20 <= val && val <= 22) {
        default_background.style.backgroundColor = "gold";
        console.log("얇은가디건, 긴팔, 청바지, 면바지");
        default_text.innerHTML = "봄, 가을이야." + "</br>" + " 날씨 좋다 !";
        default_text.style.color = "white";
    } else if (23 <= val && val <= 27) {
        default_background.style.backgroundColor = "green";
        console.log("반팔, 얇은셔츠, 반바지, 면바지");
        default_text.innerHTML = "여름이야." + "</br>" + " 어우 더워 !";
        default_text.style.color = "white";
    } else {
        default_background.style.backgroundColor = "green";
        console.log("민소매, 반팔, 반바지, 원피스");
        default_text.innerHTML = "여름이야." + "</br>" + " 어우 더워 !";
        default_text.style.color = "white";
    }
}