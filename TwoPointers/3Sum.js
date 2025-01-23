// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

var threeSum = function(nums) {
    // Array to store result triplets
    let res = [];
    // Sort array to handle duplicates and use two pointer technique
    nums.sort((a,b) => a-b);

    // Iterate through array - this will be our first number
    for(let a=0; a<nums.length; a++){
        // Skip duplicates for first number to avoid duplicate triplets
        if(a > 0 && nums[a] == nums[a-1]){
            continue;
        }

        // Use two pointers to find remaining two numbers
        let left = a+1;
        let right = nums.length - 1;

        while(left < right){
            // Calculate sum of current triplet
            let total = nums[a] + nums[left] + nums[right];

            if(total > 0){
                // Sum too large, need smaller numbers, move right pointer left
                right--;
            }
            else if(total < 0){
                // Sum too small, need larger numbers, move left pointer right
                left++;
            }
            else{
                // Found valid triplet, add to results
                res.push([nums[a], nums[left], nums[right]]);
                left++;

                // Skip duplicates for second number to avoid duplicate triplets
                while(nums[left] === nums[left-1] && left<right){
                    left++;
                }
            }
        }
    }
    return res;
};