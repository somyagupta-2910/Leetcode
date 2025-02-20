// A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.

// To obtain target, you may apply the following operation on triplets any number of times (possibly zero):

// Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].
// For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].
// Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.

 

// Example 1:

// Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
// Output: true
// Explanation: Perform the following operations:
// - Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]
// The target triplet [2,7,5] is now an element of triplets.
// Example 2:

// Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]
// Output: false
// Explanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.
// Example 3:

// Input: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]
// Output: true
// Explanation: Perform the following operations:
// - Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].
// - Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].
// The target triplet [5,5,5] is now an element of triplets.

// Function to determine if it's possible to obtain the target triplet from the given triplets
var mergeTriplets = function(triplets, target) {
    // Destructure the target array into individual variables for clarity
    let [X, Y, Z] = target;
    // Initialize counters for each component of the target triplet
    let x = 0, y = 0, z = 0;

    // Iterate through each triplet in the provided triplets array
    for (let arr of triplets) {
        // Check if the current triplet's values are within the bounds of the target triplet
        if (arr[0] <= X && arr[1] <= Y && arr[2] <= Z) {
            // Increment the counter for x if the first element matches the target's first element
            arr[0] === X && x++;
            // Increment the counter for y if the second element matches the target's second element
            arr[1] === Y && y++;
            // Increment the counter for z if the third element matches the target's third element
            arr[2] === Z && z++;
        }
    }
    // Return true if all components of the target triplet are represented in the triplets, otherwise false
    return x && y && z;
};