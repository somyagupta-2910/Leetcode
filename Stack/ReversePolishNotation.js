// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

var evalRPN = function(tokens) {
    // Stack to store operands
    const stack = [];

    // Process each token
    for (let c of tokens){
        if (c == "+"){
            // Addition: pop last two numbers and push their sum
            stack.push(stack.pop() + stack.pop());
        }
        else if (c == "-"){
            // Subtraction: order matters, so pop second operand first
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        }
        else if (c == "*"){
            // Multiplication: pop last two numbers and push their product
            stack.push(stack.pop() * stack.pop());
        }
        else if (c == "/"){
            // Division: order matters, so pop second operand first
            // Use parseInt to truncate toward zero
            let second = stack.pop();
            let first = stack.pop();
            stack.push(parseInt(first / second));
        }
        else{
            // If token is a number, convert to integer and push to stack
            stack.push(parseInt(c));
        }
    }
    // Final result is the only number left in stack
    return stack[0];
};