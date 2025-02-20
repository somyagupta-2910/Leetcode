// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Function to merge overlapping intervals
var merge = function(intervals) {
    // Sort the intervals based on the starting values
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Initialize the result array with the first interval
    let res = [intervals[0]];

    // Iterate through the sorted intervals starting from the second one
    for (let i = 1; i < intervals.length; i++) {
        // Get the last interval in the result array
        let lastInterval = res[res.length - 1];
        
        // Check if the current interval overlaps with the last interval in the result
        if (lastInterval[1] >= intervals[i][0]) {
            // If they overlap, merge them by updating the end of the last interval
            res[res.length - 1][1] = Math.max(lastInterval[1], intervals[i][1]);
        } else {
            // If they do not overlap, add the current interval to the result
            res.push(intervals[i]);
        }
    }
    // Return the merged intervals
    return res;
};