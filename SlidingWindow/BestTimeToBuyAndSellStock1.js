// Question: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
    // Initialize two pointers - left for buying day, right for selling day
    let left=0, right=1;
    // Track the maximum profit we can achieve
    let maxProfit = 0;

    // Continue while we haven't checked all possible buying days
    while(left < prices.length){
        // If price at left (buy) is less than price at right (sell), we can make profit
        if(prices[left] < prices[right]){
            // Update maxProfit if current profit is larger
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        }
        else {
            // If we can't make profit, move left pointer to right
            // since we found a lower price to buy at
            left = right;
        }
        // Move right pointer to check next selling day
        right++;
    }
    // Return the maximum profit found, or 0 if no profit possible
    return maxProfit;
};