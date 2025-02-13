// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Function to generate all possible letter combinations from a string of digits
var letterCombinations = function(digits) {
    // If the input string is empty, return an empty array
    if (!digits.length) {
        return [];
    }

    // Mapping of digits to their corresponding letters
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    // Array to hold the resulting combinations
    const res = [];

    // Helper function to perform backtracking
    const backtrack = function(i, str){
        // If the current index equals the length of digits, a complete combination is formed
        if (i === digits.length){
            res.push(str); // Add the current combination to the results
            return; // Exit the function
        }

        // Iterate through each letter corresponding to the current digit
        for (const letter of digitToLetters[digits[i]]){
            // Recur with the next index and the current combination plus the new letter
            backtrack(i+1, str+letter);
        }
    }
    
    // Start the backtracking process from the first digit
    backtrack(0, "");
    return res; // Return the array of all combinations
};