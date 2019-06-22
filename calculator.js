var numberDisplay = document.getElementById("numberDisplay")
var sum = 0;
var calculation = new Array();

function clearAll() {
    while(calculation.length > 0) {
        calculation.pop();
    }
    numberDisplay.innerHTML = 0;
}

function clearLast() {
    calculation.pop();
    updateNumDisplay()
}

function addToCalculation(calcInput) {
    calculation.push(calcInput);
    updateNumDisplay();
}

function calculateSum() {
    numberDisplay.innerHTML = sum;
}

function updateNumDisplay() {
    numberDisplay.innerHTML = calculation.join("");
}