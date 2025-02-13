// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "daabcbaabcbc", part = "abc"
// Output: "dab"
// Explanation: The following operations are done:
// - s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
// - s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
// - s = "dababc", remove "abc" starting at index 3, so s = "dab".
// Now s has no occurrences of "abc".
// Example 2:

// Input: s = "axxxxyyyyb", part = "xy"
// Output: "ab"
// Explanation: The following operations are done:
// - s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
// - s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
// - s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
// - s = "axyb", remove "xy" starting at index 1 so s = "ab".
// Now s has no occurrences of "xy".


// Function to remove all occurrences of a substring 'part' from the string 's'
var removeOccurrences = function(s, part) {
    const stack = []; // Initialize an empty stack to build the resulting string
    let partLen = part.length; // Store the length of the substring 'part'

    // Iterate through each character in the string 's'
    for (let char of s) {
        stack.push(char); // Push the current character onto the stack

        // Check if the last characters in the stack match the substring 'part'
        if (stack.slice(-partLen).join('') === part) {
            // If they match, remove the last 'partLen' characters from the stack
            stack.length -= partLen; // This effectively removes the substring 'part'
        }
    }

    // Join the characters in the stack to form the final string and return it
    return stack.join('');
};