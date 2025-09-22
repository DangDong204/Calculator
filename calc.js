let preVal = "";
let newVal = "";
let result = "";
let mathOperator = "";

let decimalClicked = false;

let valMemStored = "";

function numButPress(num) {
    if (result) {
        newVal = num;
        result = "";
    } else {
        if (num === '.') {
            if (!decimalClicked) {
                if (newVal === "") {
                    newVal = "0.";
                } else {
                    newVal += num;
                }
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("display").value = newVal;
}

function mathButPress(operator) {
    if(!result) {
        preVal = newVal;
    } else {
        preVal = result;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    result = "";
    document.getElementById("display").value = "";
}

function equalButPress() {
    decimalClicked = false;
    if(preVal === "" || newVal === "") {
        document.getElementById("display").value = "0";
        return;
    }
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);

    switch(mathOperator) {
        case '+':
            result = preVal + newVal;
            break;
        case '-':
            result = preVal - newVal;
            break;
        case '*':
            result = preVal * newVal;
            break;
        case '/':
            result = preVal / newVal;
            break;
        default:
            result = newVal;
    }

    preVal = result;
    document.getElementById("display").value = result;

}

function clearButPress() {
    preVal = "";
    newVal = "";
    result = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("display").value = "0";
}

function copyButPress() {
    valMemStored = document.getElementById("display").value;
}

function pasteButPress() {
    if (valMemStored !== "") {
        document.getElementById("display").value = valMemStored;
        newVal = valMemStored;
    }
}
