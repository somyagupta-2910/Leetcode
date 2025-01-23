// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    // Create two arrays to store products of all elements to the left and right of each index
    // Initialize with 1 since multiplying by 1 doesn't change the value
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    // Calculate products of all elements to the left of each index
    // left[i] will contain product of all elements from index 0 to i-1
    for(let i=1; i<n; i++){
        left[i] = left[i-1] * nums[i-1];
    }

    // Calculate products of all elements to the right of each index
    // right[i] will contain product of all elements from index i+1 to end
    for(let i=n-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1];
    }

    // For each index i, multiply left[i] and right[i] to get
    // the product of all elements except nums[i]
    const ans = [];
    for(let i=0; i<n; i++){
        ans[i] = left[i] * right[i];
    }

    return ans;
};