// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

// Function to partition a string into all possible palindrome substrings
var partition = function(s) {
    // Helper function to check if a substring is a palindrome
    const isPalindrome = function(s, l, r){
        // Check characters from both ends towards the center
        while(l < r){
            // If characters do not match, it's not a palindrome
            if (s[l] !== s[r]){
                return false;
            }
            l++; // Move left pointer to the right
            r--; // Move right pointer to the left
        }
        return true; // If all characters matched, it's a palindrome
    }

    const res = []; // Array to hold all the palindrome partitions
    const part = []; // Array to hold the current partition being constructed

    // Depth-first search function to explore partitions
    const dfs = function(i){
        // If the index reaches the end of the string, add the current partition to results
        if (i >= s.length){
            res.push([...part]); // Push a copy of the current partition to results
            return; // Exit the function
        }

        // Iterate through the string starting from index i
        for (let k=i; k<s.length; k++){
            // Check if the substring from i to k is a palindrome
            if (isPalindrome(s, i, k)){
                part.push(s.slice(i, k + 1)); // Add the palindrome substring to the current partition
                dfs(k+1); // Recur to find further partitions starting from the next index
                part.pop(); // Backtrack: remove the last added substring to explore other combinations
            }
        }
    }

    dfs(0); // Start the depth-first search from the first index
    return res; // Return the array of all palindrome partitions
};