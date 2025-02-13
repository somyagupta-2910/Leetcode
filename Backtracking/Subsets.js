// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Function to generate all possible subsets (the power set) of a given array of unique elements
var subsets = function(nums) {
    const res = []; // Array to hold all subsets
    const subset = []; // Array to hold the current subset being constructed

    // Helper function to create subsets recursively
    const createSubsets = function(i) {
        // Base case: if the index exceeds the length of nums, add the current subset to results
        if (i >= nums.length) {
            res.push([...subset]); // Push a copy of the current subset to results
            return; // Exit the function
        }

        // Include the current element in the subset
        subset.push(nums[i]);
        createSubsets(i + 1); // Recur to create subsets including the current element

        // Exclude the current element from the subset
        subset.pop(); // Remove the last element to backtrack
        createSubsets(i + 1); // Recur to create subsets excluding the current element
    }

    createSubsets(0); // Start the recursive process from the first index
    return res; // Return the array of all subsets
};