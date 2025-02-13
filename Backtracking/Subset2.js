// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Function to generate all possible subsets of a given array of numbers, allowing for duplicates
var subsetsWithDup = function(nums) {
    const res = []; // Array to hold all unique subsets
    const subset = []; // Array to hold the current subset being constructed

    // Sort the input array to handle duplicates easily
    nums.sort((a, b) => a - b);

    // Helper function to create subsets recursively
    const subsets = function(i) {
        // Base case: if the index reaches the length of nums, add the current subset to results
        if (i === nums.length) {
            res.push([...subset]); // Push a copy of the current subset to results
            return; // Exit the function
        }

        // Include the current element in the subset
        subset.push(nums[i]);
        subsets(i + 1); // Recur to create subsets including the current element

        // Backtrack: remove the last element to explore other combinations
        subset.pop(); // Remove the last element added to the subset

        // Skip duplicates: move to the next unique element
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++; // Increment index to skip over duplicates
        }
        subsets(i + 1); // Recur to create subsets excluding the current element
    }

    subsets(0); // Start the recursive process from the first index
    return res; // Return the array of all unique subsets
};