// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]


// Function to find all unique combinations of candidates that sum to a target value
var combinationSum2 = function(candidates, target) {
    const res = []; // Array to hold all unique combinations
    const subset = []; // Array to hold the current combination being constructed
    
    // Sort the candidates to facilitate skipping duplicates
    candidates.sort((a, b) => a - b);

    // Helper function to create subsets recursively
    const createSubset = function(i, sum) {
        // If the current sum equals the target, add the current combination to results
        if (sum === target) {
            res.push([...subset]); // Push a copy of the current combination to results
            return; // Exit the function
        }
        
        // Base case: if index exceeds candidates length or sum exceeds target, return
        if (i >= candidates.length || sum > target) {
            return; // Exit the function
        }

        // Include the current candidate in the combination
        subset.push(candidates[i]);
        // Recur with the next index and updated sum
        createSubset(i + 1, sum + candidates[i]);

        // Backtrack: remove the last added candidate to explore other combinations
        subset.pop();
        // Skip duplicates: move to the next unique candidate
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++; // Increment index to skip duplicates
        }
        // Recur with the next index to explore combinations without the current candidate
        createSubset(i + 1, sum);
    }

    // Start the recursive process from the first index and an initial sum of 0
    createSubset(0, 0);
    return res; // Return the array of all unique combinations
};