// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Function to insert a new interval into a list of non-overlapping intervals
var insert = function(intervals, newInterval) {
    // If the intervals array is empty, return an array containing only the new interval
    if (intervals.length === 0) return [newInterval];

    // Initialize an array to hold the resulting intervals after insertion
    let res = [];
    // Flag to track if the new interval has been added to the result
    let inserted = false; 

    // Iterate through each interval in the existing intervals
    for (let interval of intervals) {
        // Check if the new interval ends before the current interval starts
        if (newInterval[1] < interval[0]) { 
            // If the new interval hasn't been inserted yet, add it to the result
            if (!inserted) {
                res.push(newInterval);
                inserted = true; // Mark that the new interval has been added
            }
            // Add the current interval to the result
            res.push(interval);
        } 
        // Check if the new interval starts after the current interval ends
        else if (newInterval[0] > interval[1]) { 
            // If so, just add the current interval to the result
            res.push(interval);
        } 
        // If the intervals overlap, merge them
        else { 
            // Update the new interval to be the merged interval
            newInterval = [Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1])];
        }
    }

    // If the new interval wasn't inserted during the loop, add it at the end
    if (!inserted) {
        res.push(newInterval); 
    }

    // Return the resulting array of intervals
    return res;
};