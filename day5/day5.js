function typeIs() {
    s = prompt();
    if (s === "true" || s === "false") {
        console.log("boolean");
    } else if (s === "") {
        console.log("null");
    } else if ((s.indexOf('{') != -1) && (s.indexOf('}') != -1) && (s.indexOf(':') != -1)) {
        console.log("object");
    } else if (isNaN(s)) {
        console.log("string");
    } else if (!isNaN(s)){
        console.log("number");
    } else {
        console.log("undefined");
    }
}

