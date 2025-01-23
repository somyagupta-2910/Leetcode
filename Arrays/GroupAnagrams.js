// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]


var groupAnagrams = function(strs) {
    // Object to store anagram groups, where key is sorted string and value is array of anagrams
    let ans = {};

    // Iterate through each string in input array
    for (let s of strs){
        // Create key by sorting characters of current string
        // split('') converts string to array of chars
        // sort() sorts the characters alphabetically
        // join('') converts back to string
        let key = s.split('').sort().join('');
        
        // If this sorted key doesn't exist yet, initialize empty array
        if(!ans.hasOwnProperty(key)){
            ans[key] = [];
        }
        // Add original string to array of anagrams with this sorted key
        ans[key].push(s);
    }
    // Return array of all anagram groups (values from the object)
    return Object.values(ans);
};