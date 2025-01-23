// Function to find container with most water between two vertical lines
var maxArea = function(height) {
    // Initialize max area found so far
    let maxArea = 0;
    // Initialize two pointers at start and end of array
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        // Calculate area between current lines
        // Width = distance between lines (right-left)
        // Height = minimum of the two line heights
        maxArea = Math.max(maxArea, (right-left) * Math.min(height[left], height[right]));

        // Move the pointer with smaller height inward
        // Since area is limited by smaller height, we try to find a taller line
        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    // Return the maximum area found
    return maxArea;
};