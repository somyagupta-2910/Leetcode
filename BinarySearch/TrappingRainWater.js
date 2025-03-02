// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Function to calculate the amount of trapped rainwater given an elevation map
var trap = function(height) {
    let water = 0; // Initialize the total water trapped
    let l = 0, r = height.length - 1; // Initialize left and right pointers
    let leftMax = height[l], rightMax = height[r]; // Initialize left and right maximum heights

    // Continue until the left pointer meets the right pointer
    while (l < r) {
        // If the left maximum height is less than the right maximum height
        if (leftMax < rightMax) {
            l++; // Move the left pointer to the right
            // Update the left maximum height
            leftMax = Math.max(leftMax, height[l]);
            // Calculate the water trapped at the current position
            water += leftMax - height[l];
        } else {
            r--; // Move the right pointer to the left
            // Update the right maximum height
            rightMax = Math.max(rightMax, height[r]);
            // Calculate the water trapped at the current position
            water += rightMax - height[r];
        }
    }
    return water; // Return the total water trapped
};