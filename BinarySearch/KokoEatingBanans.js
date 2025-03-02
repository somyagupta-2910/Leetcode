// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Function to determine the minimum eating speed for Koko to finish all bananas in h hours
var minEatingSpeed = function(piles, h) {
    // Initialize the left boundary (l) to 1 and the right boundary (r) to the maximum number of bananas in any pile
    let l = 1, r = Math.max(...piles);
    // Set minHours to the maximum possible speed (r) initially
    let minHours = r;

    // Perform binary search to find the minimum speed
    while (l <= r) {
        // Calculate the middle speed (mid) to test
        let mid = Math.floor((l + r) / 2);
        // Initialize hours needed to eat all bananas at this speed
        let hours = 0;
        // Calculate the total hours needed to eat all piles at the current speed
        for (let pile of piles) {
            // For each pile, calculate the hours needed and accumulate
            hours += Math.ceil(pile / mid);
        }
        // If the total hours needed is less than or equal to h
        if (hours <= h) {
            // Update minHours to the minimum of current minHours and mid
            minHours = Math.min(minHours, mid); 
            // Move the right boundary to search for a potentially smaller speed
            r = mid - 1;
        } else {
            // If hours exceed h, increase the speed by moving the left boundary
            l = mid + 1;
        }
    }
    // Return the minimum speed found
    return minHours;
};