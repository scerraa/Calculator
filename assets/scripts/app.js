let result = 0;
let logEntries = [];
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);
function add() {
  const enteredNumber = userInput.value;
  const initalResult = result;
  const descripton = `${result}+${enteredNumber}`;
  result = result + parseInt(enteredNumber);
  outputResult(result, descripton);
  const logEntry = {
    operation: "ADD",
    prevResult: initalResult,
    number: enteredNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function subtract() {
  const enteredNumber = userInput.value;
  const initalResult = result;
  const descripton = `${result}-${enteredNumber}`;
  result = result - parseInt(enteredNumber);
  outputResult(result, descripton);
  const logEntry = {
    operation: "SUBTRACT",
    prevResult: initalResult,
    number: enteredNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function divide() {
  const enteredNumber = userInput.value;
  const initalResult = result;
  const descripton = `${result}/${enteredNumber}`;
  result = result / parseInt(enteredNumber);
  outputResult(result, descripton);
  const logEntry = {
    operation: "DIVIDE",
    prevResult: initalResult,
    number: enteredNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function multiply() {
  const enteredNumber = userInput.value;
  const initalResult = result;
  const descripton = `${result}*${enteredNumber}`;
  result = result * parseInt(enteredNumber);
  outputResult(result, descripton);
  const logEntry = {
    operation: "MULTIPLY",
    prevResult: initalResult,
    number: enteredNumber,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
