// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.


// Function to determine minimum time for all oranges to rot
// grid: m x n grid where:
// - 0 represents an empty cell
// - 1 represents a fresh orange
// - 2 represents a rotten orange
var orangesRotting = function(grid) {
    // Get dimensions of grid
    const rows = grid.length, cols = grid[0].length;
    // Track count of fresh oranges and elapsed time
    let fresh = 0, time = 0;
    // Queue for BFS traversal starting from rotten oranges
    let queue = [];

    // Step 1: Count fresh oranges and enqueue all rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                fresh++; // Count fresh oranges
            }
            if (grid[r][c] === 2) {
                queue.push([r, c]); // Add rotten oranges to queue
            }
        }
    }

    // Define possible directions to check adjacent cells (down, up, right, left)
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Step 2: BFS to spread the rotting process
    // Continue while there are rotten oranges to process and fresh oranges remaining
    while (queue.length > 0 && fresh > 0) {
        // Process all oranges that became rotten in previous minute
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            // Get coordinates of current rotten orange
            let [r, c] = queue.shift();
            // Check all adjacent cells
            for (const [dx, dy] of directions) {
                // Calculate coordinates of adjacent cell
                const nx = r + dx;
                const ny = c + dy;

                // Skip if:
                // - Cell is out of bounds
                // - Cell is empty or already rotten
                if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || grid[nx][ny] !== 1) {
                    continue;
                }

                // Process fresh orange:
                fresh--; // Decrease fresh orange count
                grid[nx][ny] = 2; // Mark orange as rotten
                queue.push([nx, ny]); // Add newly rotten orange to queue
            }
        }

        time += 1; // One minute has passed after processing current layer
    }

    // Step 3: Return result
    // If no fresh oranges remain, return elapsed time
    // Otherwise return -1 as not all oranges could rot
    return fresh === 0 ? time : -1;
};
