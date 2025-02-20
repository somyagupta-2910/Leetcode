// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Function to determine the minimum number of intervals to remove to make the rest non-overlapping
var eraseOverlapIntervals = function(intervals) {
    // Sort the intervals based on their starting points
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Initialize a counter for the number of removals needed
    let removals = 0;
    // Set the end of the previous interval to the end of the first interval
    let prevEnd = intervals[0][1];

    // Iterate through the sorted intervals starting from the second one
    for (let i = 1; i < intervals.length; i++) {
        // If the current interval starts after or when the previous interval ends, no overlap
        if (intervals[i][0] >= prevEnd) {
            // Update the end of the previous interval to the current interval's end
            prevEnd = intervals[i][1];
        } else {
            // If there is an overlap, increment the removal counter
            removals++;
            // Update the end of the previous interval to the minimum end of the overlapping intervals
            prevEnd = Math.min(prevEnd, intervals[i][1]);
        }
    }
    // Return the total number of intervals that need to be removed
    return removals;
};