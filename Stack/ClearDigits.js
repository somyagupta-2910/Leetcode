// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

 

// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".

// Function to remove all digits from the string by deleting the first digit and the closest non-digit character to its left
var clearDigits = function(s) {
    // Initialize an empty stack to build the resulting string
    let stack = [];

    // Iterate through each character in the input string
    for (let ch of s) {
        // Check if the current character is a digit
        if (!isNaN(ch)) {
            // If it is a digit, remove the last character from the stack (closest non-digit to the left)
            stack.pop();
        } else {
            // If it is not a digit, add the character to the stack
            stack.push(ch);
        }
    }
    // Join the characters in the stack to form the final string and return it
    return stack.join('');
};