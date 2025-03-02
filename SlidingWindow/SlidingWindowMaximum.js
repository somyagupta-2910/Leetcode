// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Function to find the maximum value in each sliding window of size k
var maxSlidingWindow = function(nums, k) {
    let res = []; // Array to store the maximum values for each window
    let deque = []; // Deque to store indices of the elements in the current window

    // Iterate through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the bounds of the current window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift(); // Remove the front of the deque
        }

        // Remove elements from the deque that are less than the current element
        // as they cannot be the maximum for the current window
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop(); // Remove the back of the deque
        }

        // Add the current index to the deque
        deque.push(i);

        // If we have processed at least k elements, add the maximum for the current window to the result
        if (i >= k - 1) {
            res.push(nums[deque[0]]); // The front of the deque is the index of the maximum element
        }
    }
    return res; // Return the array of maximum values for each window
};