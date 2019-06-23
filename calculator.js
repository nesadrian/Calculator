var numberDisplay = document.getElementById("numberDisplay")
var sum = 0;
var calculation = new Array();

function clearAll() {
    while(calculation.length > 0) {
        calculation.pop();
    }
    updateNumDisplay(0);
}

function clearLast() {
    calculation.pop();
    if(calculation.length == 0) {
        updateNumDisplay(0);
    }
    else {
        updateNumDisplay(calculation.join(""));
    }
}

function addToCalculation(calcInput) {
    calculation.push(calcInput);
    updateNumDisplay(calculation.join(""));
}

function calculateSum() {
    //eval() as a way to calculate should be replaced
    updateNumDisplay(sum);
    sum = eval(calculation.join(''));
}

function updateNumDisplay(information) {
    numberDisplay.innerHTML = information;
}