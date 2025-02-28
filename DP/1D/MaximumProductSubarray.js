// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Function to find the maximum product of a contiguous subarray in an array of integers
var maxProduct = function(nums) {
    // Initialize current maximum and minimum products to 1
    // 'res' will hold the maximum product found, initialized to the maximum value in the array
    let currMax = 1, currMin = 1, res = Math.max(...nums);

    // Iterate through each number in the input array
    for (let num of nums) {
        // Store the current maximum product multiplied by the current number
        let temp = currMax * num;

        // Update the current maximum product:
        // It can be the maximum of:
        // 1. The product of the current maximum and the current number
        // 2. The product of the current minimum and the current number (in case of negative numbers)
        // 3. The current number itself (starting a new subarray)
        currMax = Math.max(temp, currMin * num, num);

        // Update the current minimum product:
        // It can be the minimum of:
        // 1. The product of the current maximum and the current number
        // 2. The product of the current minimum and the current number
        // 3. The current number itself
        currMin = Math.min(temp, currMin * num, num);

        // Update the result with the maximum product found so far
        res = Math.max(res, currMax);
    }
    // Return the maximum product found
    return res;
};