// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Function to count number of islands in a binary grid
var numIslands = function(grid) {
    // Counter for number of islands found
    let islands = 0;
    // Set to keep track of visited cells
    const visited = new Set();
    // Get grid dimensions
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function to perform BFS starting from a land cell
    const bfs = function (r, c) {
        // Initialize queue for BFS traversal
        const queue = [];
        // Mark starting cell as visited
        visited.add(`${r}, ${c}`);
        queue.push([r, c]);

        // Process cells in queue until empty
        while(queue.length > 0){
            // Get next cell from queue
            const [row, col] = queue.shift();
            // Define possible directions to move (up, down, left, right)
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            // Check all adjacent cells
            for (const [dr, dc] of directions) {
                // Calculate coordinates of adjacent cell
                const nr = row + dr;
                const nc = col + dc;

                // If adjacent cell is valid, is land, and not visited:
                // - Within grid bounds
                // - Contains "1" (land)
                // - Not already visited
                if(nr >= 0 && nr < rows && nc >=0 && nc < cols && grid[nr][nc] === "1" && !visited.has(`${nr}, ${nc}`)){
                    // Add to queue and mark as visited
                    queue.push([nr, nc]);
                    visited.add(`${nr}, ${nc}`);
                }
            }
        }
    }

    // Iterate through each cell in the grid
    for(let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            // If we find unvisited land, it's a new island
            if(grid[r][c] === "1" && !visited.has(`${r}, ${c}`)){
                // Increment island count
                islands+=1;
                // Use BFS to mark all connected land cells as visited
                bfs(r,c);
            }
        } 
    }

    // Return total number of islands found
    return islands;
};