function add(n1, n2) {
  return n1 + n2
}

function subtract(n1, n2) {
  return n1 - n2
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
let firstNumber
let operator

const items = document.querySelectorAll('.item');
const display = document.querySelector('.text');

// update display with target.id, and update the displayValue variable
function populateDisplay(e) {
  display.textContent = displayValue;
  // restart calculations when pressing a new number after equalsOperations
  if (firstNumber == undefined && operator != undefined) {
    displayValue = '';
    display.textContent = displayValue;
    operator = undefined;
  }
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
  switch(e.target.id) {
    case '*':
    case '/':
    case '+':
    case '-':
      handleOperations(e);
      break;
    case '=':
      equalsOperations();
      break;
    case 'clear':
      clearEverything();
      break;
    case 'neg':
      signChange();
      break;
    case 'del':
      eraseButton();
      break;
    default:
      if (displayValue.length >= 11) return;
      populateDisplay(e);
  }
}

// checks if a negative sign already exists in the display, if it does, remove it, if it doesnt, add it to the begining of said display
function signChange() {
  let sign = '-'
  display.textContent.includes('-') ? display.textContent = displayValue.substring(1) : display.textContent = sign += display.textContent;

  // reassign the displayValue variable
  displayValue = display.textContent;
}

function eraseButton() {
  display.textContent = display.textContent.slice(0, -1);

  displayValue = display.textContent;
}

function handleOperations(e) {
  // if there is already a firstNumber, run the equals operations
  if (firstNumber != undefined) {
    equalsOperations();
  }
  // if an operator button has already been pressed, assign the new operator and return
  if (displayValue == '') {
    operator = e.target.id;
    return;
  }
  firstNumber = parseFloat(displayValue);
  operator = e.target.id;
  displayValue = '';
}

function equalsOperations() {
  // if either of the 2 numbers are missing, dont operate
  if (firstNumber == undefined) return;
  if (displayValue == '') return;
  if (displayValue == '0' && operator == '/') {
    display.textContent = 'naah bruh';
    displayValue = '';
    firstNumber = undefined;
    return;
  }
  let answer = operate(operator, firstNumber, parseFloat(displayValue));
  answer.toString().length > 11 ? display.textContent = answer.toExponential(5) : display.textContent = answer;
  displayValue = display.textContent;
  firstNumber = undefined;
}

function clearEverything() {
  firstNumber = undefined;
  operator = undefined;
  displayValue = '';
  display.textContent = displayValue;
}

function hoverEffect(e) {
  e.target.classList.toggle('hover');
}

// button event listener
items.forEach((item) => item.addEventListener('click', handleButtons));
items.forEach((item) => item.addEventListener('mouseover', hoverEffect));
items.forEach((item) => item.addEventListener('mouseout', hoverEffect));