// Setting initial display to empty
let displayValue = "";

function handleButton(value) {
    displayValue += value;
    console.log(displayValue);
    document.querySelector("#display").value = displayValue;
}

function calculate() {
    displayValue = eval(displayValue);
    document.querySelector("#display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.querySelector("#display").value = "";
}
