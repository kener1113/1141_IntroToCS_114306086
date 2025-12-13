function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero");
    return null;
  }
  return a / b;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const resultText = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      if (result === null) return;
      break;
  }

  resultText.innerText = "Result = " + result.toFixed(2);
}