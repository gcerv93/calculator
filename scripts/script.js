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