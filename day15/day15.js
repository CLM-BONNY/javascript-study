let count= 0;
let topText1;
let topText2;

let default_background = document.getElementById("body");
let context = document.getElementById("context");
let default_text = document.getElementById("cloth");
// let val = document.getElementById("input_text").value;

let text_set = ["겨울이에요" + "</br>" + "따뜻하게 입으세요 !", "봄, 가을이에요" + "</br>" + "날씨 좋아요 !",
    "봄, 가을이에요" + "</br>" + "날씨 좋아요 !", "여름이에요" + "</br>" + "어우 더워요 !",
    "오늘 기온이" + "</br>" + "여러번 바뀌나요 ?", "잘못 누르셨나요 ?",
    "위의 문장" + "</br>" + "바꿔드릴까요 ?", "첫번째 문장을 입력해주세요",
    "프로그램을" + "</br>" + "종료합니다.", "두번째 문장을 입력해주세요",
    "문장을 바꿨어요 !"];
let season_back_color = ["white", "saddlebrown", "gold", "green"];
let season_text_color = ["black", "white", "white", "white"];

let json = [{ topText1 : '오늘의 기온을 적어주세요', topText2 : '기온에 맞는 옷차림을 알려드릴게요'}];

function text_change(n) { default_text.innerHTML = text_set[n]; }

function typing(n) {
    let typewriter = new Typewriter(context, { loop: true });
    typewriter.typeString(json[n].topText1)
        .pauseFor(2500)
        .deleteAll()
        .typeString(json[n].topText2)
        .pauseFor(2500)
        .start();
}

function push_json() { json.push({topText1: `${topText1}`, topText2: `${topText2}`}); }

function season(n) {
    count++;
    default_text.innerHTML = text_set[n];
    default_background.style.backgroundColor = season_back_color[n];
    default_text.style.color = season_text_color[n];
    count_check();
}

function input_check() {
    let val = document.getElementById("input_text").value;

    if (val === "나 뭐입지?") {
        typing(0);
    }

    if (val <= 4) { console.log("패딩, 두꺼운코드, 목도리, 기모제품"); season(0); }
    else if (5 <= val && val <= 8) { console.log("코트, 가죽자켓, 니트, 레깅스"); season(0); }
    else if (9 <= val && val <= 11) { console.log("자켓, 트렌치코트, 니트, 청바지"); season(1); }
    else if (12 <= val && val <= 16) { console.log("자켓, 가디건, 야상, 청바지, 면바지"); season(1); }
    else if (17 <= val && val <= 19) { console.log("얇은니트, 맨투맨, 가디건, 청바지, 면바지"); season(2); }
    else if (20 <= val && val <= 22) { console.log("얇은가디건, 긴팔, 청바지, 면바지"); season(2); }
    else if (23 <= val && val <= 27) { console.log("반팔, 얇은셔츠, 반바지, 면바지"); season(3); }
    else if (28 <= val && val <= 40) { console.log("민소매, 반팔, 반바지, 원피스"); season(3); }
    else { count++; count_check(); }
}

function count_check() {
    let val = document.getElementById("input_text").value;

    if (count === 7) { text_change(4); }
    else if (count === 8) { text_change(5); }
    else if (count === 9) { text_change(6); }
    else if (count === 10) {
        if (val === "응") { text_change(7); }
        else { text_change(8); return; }
    }
    else if (count === 11) { topText1 = val; text_change(9); }
    else if (count === 12) {
        topText2 = val; push_json(); typing(1); text_change(10);
        default_background.style.backgroundColor = "antiquewhite";
    }
    else { return; }
}