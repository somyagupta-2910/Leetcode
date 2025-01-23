// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function(s) {
    // Convert string to lowercase and remove all non-alphanumeric characters
    // using regex pattern [^a-z0-9] which matches anything that is not a-z or 0-9
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Initialize two pointers - one at start and one at end
    let left = 0;
    let right = s.length - 1;

    // Keep checking characters from both ends moving towards center
    while(left < right){
        // If characters at left and right pointers don't match
        // then string is not a palindrome
        if(s[left] !== s[right]){
            return false;
        }
        // Move left pointer towards right
        left++;
        // Move right pointer towards left
        right--;
    }

    // If we get here, all characters matched
    // so string is a palindrome
    return true;
};