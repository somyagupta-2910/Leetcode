// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Function to calculate the number of unique paths in an m x n grid
var uniquePaths = function(m, n) {
    // Create a 2D array (dp) to store the number of unique paths to each cell, initialized to -1
    const dp = new Array(m).fill(null).map(() => Array(n).fill(-1));

    // Recursive function to find the number of unique paths from the current cell (i, j)
    const solve = function(i, j){
        // Base case: if the robot reaches the bottom-right corner, there is one unique path
        if (i == m-1 && j == n-1){
            return 1;
        }
        // If the result for this cell has already been computed, return the cached result
        if (dp[i][j] !== -1){
            return dp[i][j];
        }

        // Initialize paths for moving right and down
        let rightPath = 0, downPath = 0;
        // If the robot can move down, recursively calculate paths from the cell below
        if (i < m - 1){
            rightPath = solve(i+1, j);
        }
        // If the robot can move right, recursively calculate paths from the cell to the right
        if(j < n - 1){
            downPath = solve(i, j+1);
        }
        // Store the total number of unique paths from the current cell in the dp array
        dp[i][j] = rightPath + downPath;
        return dp[i][j]; // Return the total unique paths from the current cell
    }
    // Start the recursive process from the top-left corner of the grid
    return solve(0, 0);
};