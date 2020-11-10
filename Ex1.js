// Using two stacks — one for the operands and one for the operators —
//design and implement a JavaScript function that converts infix expressions to postfix expressions,
//and then use the stacks to evaluate the expression.

// Quick deffination of Infix and Post fix
//When you write an arithmetic expression such as B * C,
//This type of notation is referred to as infix since the operator is in between the two operands that it is working on.

//Postfix: An expression is called the postfix expression
//if the operator appears in the expression after the operands.Simply of the form(operand1 operand2 operator).
//Example : AB+CD-* (Infix : (A+B * (C-D) )

function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push (element) {
  return (this.dataStore[this.top++] = element);
}
function pop () {
  return this.dataStore[this.top--];
}
function peek () {
  return this.dataStore[this.top - 1];
}
function length () {
  return this.top;
}
function clear () {
  this.top = 0;
  this.dataStore = 0;
}

var input = '150/35';
var operands = new Stack ();
var operators = new Stack ();
var changeOperands = new Stack ();
var postfixStr = '';

function convertingInfixToPostfix (input) {
  var numberString = '';

  for (var i = 0; i < input.length; i++) {
    var value = input[i];
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      operators.push (value);
      operands.push (numberString);
      numberString = '';
    } else {
      numberString += value;
    }
  }
  operands.push (numberString);

  while (operands.length () > 0) {
    changeOperands.push (operands.pop ());
  }

  var operand1 = changeOperands.pop ();
  var operand2 = changeOperands.pop ();
  var operator = operators.pop ();

  console.log (`Postfix Operator :-> ${operand1} ${operand2} ${operator} `);
}

convertingInfixToPostfix (input);
