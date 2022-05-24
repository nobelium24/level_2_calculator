let display = document.getElementById('display');
let display2 = document.getElementById("display2");
let signs;
let firstnumber;
let secondnumber;


function number(num1) {
    display2.innerHTML += num1;
}

function del() {
    display.innerHTML = "";
}

function del2() {
    display2.innerHTML = "";
    display.innerHTML = "";
}

function opreators(operation) {
    firstnumber = display2.innerHTML;
    display.innerHTML += `${firstnumber} ${operation}`;
    display2.innerHTML = '';
    signs = operation;
}

function backspace() {
    let del = display2.innerHTML
    display2.innerHTML = del.substr(0, del.length - 1)
}

function sum(params) {
    if (signs == "+") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) + Number(display2.innerHTML);
    } else if (signs == "-") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) - Number(display2.innerHTML);
    } else if (signs == "/") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) / Number(display2.innerHTML);
    } else if (signs == "x") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) * Number(display2.innerHTML);
    } else if (signs == "^") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) ** Number(display2.innerHTML);
    } else if (signs == "%") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Number(firstnumber) / 100 * 100;
    } else if (signs == "√") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = Math.sqrt(Number(display2.innerHTML));
    } else if (signs == "1/") {
        display.innerHTML += display2.innerHTML;
        display2.innerHTML = 1 / Number(display2.innerHTML)
    }
    // else if (sign == "sqr(") {
    //     display.innerHTML += display2.innerHTML;
    //     display2.innerHTML = Math.pow(Number(display2.innerHTML), 2)
    // }
}

function equalsTo(param) {
    // console.log(firstnumber);
    // console.log(secondnumber);
    sum();
}
// let a = [1, 3, 4, 5]
// a.splice(2, 2)
// console.log(a);