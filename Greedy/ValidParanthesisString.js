// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "(*)"
// Output: true
// Example 3:

// Input: s = "(*))"
// Output: true

// Function to check if a string containing parentheses and asterisks is valid
var checkValidString = function(s) {
    // Initialize counters for the minimum and maximum number of left parentheses
    let leftMin = 0, leftMax = 0;

    // Iterate through each character in the string
    for(let ch of s){
        // If the character is a left parenthesis, increment both counters
        if (ch === '('){
            leftMin++;
            leftMax++;
        }
        // If the character is a right parenthesis, decrement both counters
        else if (ch === ')'){
            leftMin--;
            leftMax--;
        }
        // If the character is an asterisk, treat it as a right parenthesis or left parenthesis or empty
        else{
            leftMin--; // Treat as a right parenthesis
            leftMax++; // Treat as a left parenthesis
        }
        // If the maximum number of left parentheses goes below zero, the string is invalid
        if (leftMax < 0){
            return false;
        }
        // If the minimum number of left parentheses goes below zero, reset it to zero
        if (leftMin < 0){
            leftMin = 0;
        }
    }
    // The string is valid if the minimum number of left parentheses is zero at the end
    return leftMin === 0;
};