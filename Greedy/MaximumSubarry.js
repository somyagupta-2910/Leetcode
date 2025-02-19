// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Function to find the maximum sum of a contiguous subarray
var maxSubArray = function(nums) {
    // Initialize maxSum with the first element of the array
    let maxSum = nums[0];
    // Initialize currSum to keep track of the current subarray sum
    let currSum = 0;

    // Iterate through each number in the input array
    for (let num of nums) {
        // If the current sum is negative, reset it to 0
        if (currSum < 0) {
            currSum = 0;
        }
        // Add the current number to the current sum
        currSum += num;
        // Update maxSum if the current sum is greater than the maxSum found so far
        maxSum = Math.max(maxSum, currSum);
    }
    // Return the maximum sum of the contiguous subarray
    return maxSum;
};