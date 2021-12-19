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

items.forEach((item) =>  {
  item.addEventListener('click', (e) => {
    // convert the id to a number, then check if it is in fact a number, if it is a number, populateDisplay
    if (Number.isInteger(parseInt(e.target.id))) {
      populateDisplay(e);
    }
  })
})

// update display with target.id, and update the displayValue variable
function populateDisplay(e) {
  display.textContent += e.target.id;
  displayValue = display.textContent;
}
