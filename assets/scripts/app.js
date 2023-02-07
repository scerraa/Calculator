let result = 0;
let logEntries = [];
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);

function calculate(type) {
  const enteredNumber = userInput.value;
  const initalResult = result;
  let descripton;
  if (!checkNumber(enteredNumber)) {
    alert("Please enter a valid number");
    return;
  }
  if (type === "ADD") {
    descripton = `${result}+${enteredNumber}`;
    result = result + parseFloat(enteredNumber);
  } else if (type === "SUBTRACT") {
    descripton = `${result}-${enteredNumber}`;
    result = result - parseFloat(enteredNumber);
  } else if (type === "MULTIPLY") {
    descripton = `${result}*${enteredNumber}`;
    result = result * parseFloat(enteredNumber);
  } else if ((type = "DIVIDE")) {
    descripton = `${result}/${enteredNumber}`;
    result = result / parseFloat(enteredNumber);
  }
  outputResult(result, descripton);
  writeToLog(type, initalResult, enteredNumber, result);
}

function checkNumber(number) {
  if (number === "" || !parseInt(number)) {
    return false;
  }
  return true;
}

function writeToLog(operation, prevResult, number, result) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function add() {
  calculate("ADD");
}
function subtract() {
  calculate("SUBTRACT");
}
function divide() {
  calculate("DIVIDE");
}
function multiply() {
  calculate("MULTIPLY");
}
