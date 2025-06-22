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
        helper = "0";
    }

    if (screenNumber === "0") {
        screenNumber = '';
    }
    screenNumber = screenNumber + x;
    printOnScreen(x)
}

function operate(type) {
    partA = +screenNumber;
    operatetype = type;
    helper = 1;


}

function calculate() {
    partB = +screenNumber;
    if (operatetype === "+") {

        result = partA + partB;
    }
    screen.innerHTML = result;
}