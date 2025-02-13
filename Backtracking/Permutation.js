// Given an array nums of distinct integers, return all the possible 
// permutations
// . You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]


// Function to generate all permutations of an array of numbers
var permute = function(nums) {
    // Helper function to perform backtracking
    const backtrack = function (start) {
        // If the starting index reaches the length of nums, a complete permutation is formed
        if (start === nums.length){
            res.push([...nums]); // Add a copy of the current permutation to the results
            return; // Exit the function
        }

        // Iterate through the array starting from the current index
        for (let i = start; i < nums.length; i++) {
            // Swap the current element with the starting element
            [nums[start], nums[i]] = [nums[i], nums[start]];
            // Recur to generate permutations for the next index
            backtrack(start + 1);
            // Backtrack: swap back to restore the original array for the next iteration
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    const res = []; // Array to hold all the permutations
    backtrack(0); // Start the backtracking process from the first index
    return res; // Return the array of all permutations
};