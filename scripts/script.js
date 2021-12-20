function add(n1, n2) {
  return n1 + n2
}

function subtract(n1, n2) {
  if (n1 > n2) return n1 - n2
  if (n2 > n1) return n2 - n1
}

function multiply(n1, n2) {
  return n1 * n2
}

function divide(n1, n2) {
  return n1 / n2
}

function operate(op, n1, n2) {
  switch(op) {
    case '+':
      return add(n1, n2);
    case '-':
      return subtract(n1, n2);
    case '*':
      return multiply(n1, n2);
    case '/':
      return divide(n1, n2);
  }
}

let displayValue = ''
const items = document.querySelectorAll('.item');
const display = document.querySelector('.display');

// button event listener
items.forEach((item) => item.addEventListener('click', handleButtons))

// update display with target.id, and update the displayValue variable
function populateDisplay(e) {
  // do nothing if a '.' already exists in display
  if (e.target.id == '.') {
    if (display.textContent.includes('.')) {
      return
    }
  }
  display.textContent += e.target.id;
  displayValue = display.textContent;
}

function handleButtons(e) {
  // convert the target id to a number, then check if it is in fact a number, if it is a number, populateDisplay
  if (Number.isInteger(parseInt(e.target.id))) {
    populateDisplay(e);
  } else if (e.target.id == ".") {
    populateDisplay(e);
  } else if (e.target.id == 'neg') {
    signChange(e);
  }
}

// checks if a negative sign already exists in the display, if it does, remove it, if it doesnt, add it to the begining of said display
function signChange() {
  let sign = '-'
  display.textContent.includes('-') ? display.textContent = displayValue.substring(1) : display.textContent = sign += display.textContent;

  // reassign the displayValue variable
  displayValue = display.textContent;
}