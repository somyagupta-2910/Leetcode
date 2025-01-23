// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    // 1. Build frequency map
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // 2. Build bucket array, where index = frequency and value = set of numbers
    for (let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    // 3. Start from the highest frequency and collect elements until we have k
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            // Spread the numbers in bucket[i] into the result
            result.push(...bucket[i]);
        }
        // Stop once we've collected k elements
        if (result.length === k) break;
    }
    
    return result;
};
