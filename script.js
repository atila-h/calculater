const screen = document.querySelector(".screen")

let screenNumber = "0", partA, partB, operatetype, helper = 0;

screen.innerHTML = screenNumber;

function printOnScreen(x) {
    if (x === ".") {

        screen.innerHTML = (+screenNumber).toLocaleString() + ".";
    }
    else {
        screen.innerHTML = (+screenNumber).toLocaleString();
    }
}

function setNum(x) {
    if (helper) {
        screenNumber = "";
        helper = 0;
    }

    if (screenNumber === "0") {
        screenNumber = '';
    }
    screenNumber = screenNumber + x;
    printOnScreen(x)
}

function operate(type) {
    if (partA) {
        calculate()
    }
    else {
        partA = +screenNumber;
    }
    operatetype = type;
    helper = 1;


}

function calculate() {
    partB = +screenNumber;
    
    let result;

    if (operatetype === "+") {

        result = partA + partB;
    }
    else if (operatetype === "-") {

        result = partA - partB;
    }

    else if (operatetype === "*") {

        result = partA * partB;
    }
    else {
        result = partA / partB;
    }
    helper= 1;
    screen.innerHTML = (+result).toLocaleString();

    partA = result;

    screenNumber = result.toString();
}