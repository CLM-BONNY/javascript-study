function input_check() {
    let val = Number(document.getElementById("degree").value);
    if (val <= 4) {
        console.log("패딩, 두꺼운코드, 목도리, 기모제품");
    } else if (5 <= val && val <= 8) {
        console.log("코트, 가죽자켓, 니트, 레깅스");
    } else if (9 <= val && val <= 11) {
        console.log("자켓, 트렌치코트, 니트, 청바지");
    } else if (12 <= val && val <= 16) {
        console.log("자켓, 가디건, 야상, 청바지, 면바지");
    } else if (17 <= val && val <= 19) {
        console.log("얇은니트, 맨투맨, 가디건, 청바지, 면바지");
    } else if (20 <= val && val <= 22) {
        console.log("얇은가디건, 긴팔, 청바지, 면바지");
    } else if (23 <= val && val <= 27) {
        console.log("반팔, 얇은셔츠, 반바지, 면바지");
    } else {
        console.log("민소매, 반팔, 반바지, 원피스");
    }
}