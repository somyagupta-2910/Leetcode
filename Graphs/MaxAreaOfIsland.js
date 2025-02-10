// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.


// Function to find the maximum area of an island in a binary matrix
var maxAreaOfIsland = function(grid) {
    // Set to keep track of visited cells
    let visited = new Set();
    // Get grid dimensions
    const row = grid.length;
    const col = grid[0].length;
    // Variable to store maximum area found
    let maxArea = 0;

    // Helper function to perform DFS and calculate area of an island
    const dfs = function(r, c){
        // Base cases - return 0 if:
        // - Out of grid bounds
        // - Current cell is water (0)
        // - Cell already visited
        if(r<0 || r===row || c<0 || c===col || grid[r][c] === 0 || visited.has(`${r}, ${c}`)){
            return 0;
        }

        // Mark current cell as visited
        visited.add(`${r}, ${c}`);

        // Return area of current cell (1) plus sum of areas from adjacent cells
        // Check all 4 directions: down, up, right, left
        return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
    }

    // Iterate through each cell in the grid
    for(let r=0; r<row; r++){
        for(let c=0; c<col; c++){
            // Update maxArea if current island is larger
            maxArea = Math.max(maxArea, dfs(r, c));
        }
    }

    // Return the maximum area found
    return maxArea;
};