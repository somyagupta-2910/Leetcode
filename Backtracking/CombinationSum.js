// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Function to find all unique combinations of candidates that sum to a target value
var combinationSum = function(candidates, target) {
    const res = []; // Array to hold all unique combinations
    const subset = []; // Array to hold the current combination being constructed

    // Helper function to generate combinations recursively
    const getCombSubsets = function(i, sum) {
        // Base case: if index exceeds candidates length or sum exceeds target, return
        if (i >= candidates.length || sum > target) {
            return;
        }
        // If the current sum equals the target, add the current combination to results
        if (sum === target) {
            res.push([...subset]); // Push a copy of the current combination to results
            return;
        }

        // Include the current candidate in the combination
        subset.push(candidates[i]);
        // Recur with the same index to allow for unlimited usage of the current candidate
        getCombSubsets(i, sum + candidates[i]);

        // Backtrack: remove the last added candidate to explore other combinations
        subset.pop();
        // Recur with the next index to explore combinations without the current candidate
        getCombSubsets(i + 1, sum);
    }

    // Start the recursive process from the first index and an initial sum of 0
    getCombSubsets(0, 0);
    return res; // Return the array of all unique combinations
};