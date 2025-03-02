// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Input: heights = [2,4]
// Output: 4


// Function to calculate the area of the largest rectangle in a histogram
var largestRectangleArea = function(heights) {
    // Get the length of the heights array and initialize maxArea to 0
    let len = heights.length, maxArea = 0;
    // Initialize a stack to keep track of bar indices and their heights
    let stack = [];
    
    // Iterate through each bar in the histogram
    for (let i = 0; i < len; i++) {
        // Set the starting index for the current bar
        let start = i;
        
        // While there are bars in the stack and the current bar is shorter than the bar at the top of the stack
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            // Pop the top bar from the stack
            let [index, height] = stack.pop();
            // Calculate the area with the popped bar as the shortest bar
            maxArea = Math.max(maxArea, height * (i - index));
            // Update the starting index to the index of the popped bar
            start = index;
        }
        // Push the current bar's index and height onto the stack
        stack.push([start, heights[i]]);
    }
    
    // After processing all bars, calculate the area for the remaining bars in the stack
    while (stack.length) {
        // Pop the top bar from the stack
        let [index, height] = stack.pop();
        // Calculate the area with the popped bar as the shortest bar
        maxArea = Math.max(maxArea, height * (len - index));
    }
    
    // Return the maximum area found
    return maxArea;
};