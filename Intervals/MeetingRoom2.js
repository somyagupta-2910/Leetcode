// Function to determine the minimum number of meeting rooms required to accommodate all meetings
var minMeetingRooms = function(intervals) {
    // Arrays to hold the start and end times of the meetings
    let start = [];
    let end = [];
    
    // Populate the start and end arrays with the respective times from the intervals
    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i][0]); // Add start time
        end.push(intervals[i][1]);   // Add end time
    }
    
    // Sort the start and end arrays to facilitate the meeting room allocation process
    start.sort((a, b) => a - b); // Sort start times in ascending order
    end.sort((a, b) => a - b);   // Sort end times in ascending order
    
    let count = 0; // Counter for the number of meeting rooms in use
    let i = 0;     // Pointer for the start array
    let j = 0;     // Pointer for the end array
    let maxCount = 0; // Variable to track the maximum number of meeting rooms needed at any time
    
    // Iterate through the start times to determine the number of rooms needed
    while (i < start.length) {
        // If the next meeting starts before the current meeting ends, we need a new room
        if (start[i] < end[j]) {
            count++; // Increment the count of rooms in use
            i++;     // Move to the next start time
        } else {
            // If the current meeting ends before the next meeting starts, we can free a room
            count--; // Decrement the count of rooms in use
            j++;     // Move to the next end time
        }
        // Update the maximum count of rooms needed
        maxCount = Math.max(maxCount, count);
    }
    
    // Return the maximum number of meeting rooms required
    return maxCount;
}