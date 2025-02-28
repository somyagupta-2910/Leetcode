// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Function to find the length of the longest increasing subsequence in an array
var lengthOfLIS = function(nums) {
    const len = nums.length; // Get the length of the input array
    const map = new Map(); // Create a map to store computed results for memoization

    // Recursive function to determine the length of the longest increasing subsequence
    const solve = function (currIndex, prevIndex) {
        // Base case: if the current index reaches the length of the array, return 0
        if (currIndex === len) {
            return 0;
        }
        
        // Create a unique key for the current state using current and previous indices
        const key = `${currIndex}-${prevIndex}`;
        
        // Check if the result for this state has already been computed
        if (map.has(key)) {
            return map.get(key); // Return the cached result
        }

        let take = 0; // Variable to store the length if we take the current element
        // Check if we can take the current element (either it's the first element or it's greater than the previous one)
        if (prevIndex == -1 || nums[currIndex] > nums[prevIndex]) {
            // If we take the current element, increment the count and move to the next index
            take = 1 + solve(currIndex + 1, currIndex);
        }
        
        // Calculate the length if we do not take the current element
        let dontTake = solve(currIndex + 1, prevIndex);
        
        // Determine the maximum length between taking and not taking the current element
        let maxi = Math.max(take, dontTake);

        // Store the computed result in the map for future reference
        map.set(key, maxi);
        return maxi; // Return the maximum length found
    }
    
    // Start the recursive process from the first index with no previous index
    return solve(0, -1);
};