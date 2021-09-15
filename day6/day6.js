let input;
let input_x;
let input_y;
let clickedOperator;
let dap;

function operand() {
    input = prompt().split(',');
    input_x = Number(input[0]);
    input_y = Number(input[1]);
}

function operator(n) {
    if (n === 0) {
        clickedOperator = '+';
        dap = input_x + input_y;
    } else if (n === 1) {
        clickedOperator = '-';
        dap = input_x - input_y;
    } else if (n === 2) {
        clickedOperator = '*';
        dap = input_x * input_y;
    } else if (n === 3) {
        clickedOperator = '/';
        dap = parseInt(input_x / input_y);
    } else {
        clickedOperator = '%';
        dap = input_x % input_y;
    }
}

function answer() {
    console.log('x', clickedOperator, 'y', '=', dap);
}
