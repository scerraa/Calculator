let result = 0;
let logEntries = [];
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);

function checkNumber(number) {
  if (number == "") {
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
  const enteredNumber = userInput.value;
  // console.log(typeof enteredNumber);
  if (checkNumber(enteredNumber)) {
    const initalResult = result;
    const descripton = `${result}+${enteredNumber}`;
    result = result + parseFloat(enteredNumber);
    outputResult(result, descripton);
    writeToLog("ADD", initalResult, enteredNumber, result);
  } else alert("Please enter a valid number");
}
function subtract() {
  const enteredNumber = userInput.value;
  if (checkNumber(enteredNumber)) {
    const initalResult = result;
    const descripton = `${result}-${enteredNumber}`;
    result = result - parseFloat(enteredNumber);
    outputResult(result, descripton);
    writeToLog("SUBTRACT", initalResult, enteredNumber, result);
  } else alert("Please enter a valid number");
}
function divide() {
  const enteredNumber = userInput.value;
  if (checkNumber(enteredNumber)) {
    const initalResult = result;
    const descripton = `${result}/${enteredNumber}`;
    result = result / parseFloat(enteredNumber);
    outputResult(result, descripton);
    writeToLog("DIVIDE", initalResult, enteredNumber, result);
  } else alert("Please enter a valid number");
}
function multiply() {
  const enteredNumber = userInput.value;
  if (checkNumber(enteredNumber)) {
    const initalResult = result;
    const descripton = `${result}*${enteredNumber}`;
    result = result * parseFloat(enteredNumber);
    outputResult(result, descripton);
    writeToLog("MULTIPLY", initalResult, enteredNumber, result);
  } else alert("Please enter a valid number");
}
