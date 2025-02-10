// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const pacific = new Set();
    const atlantic = new Set();

    const dfs = function(r, c, visit, previousHeight) {
        if (
            visit.has(`${r},${c}`) || // Check if the cell is already visited
            r < 0 || c < 0 || r >= rows || c >= cols || // Out of bounds
            heights[r][c] < previousHeight // Height condition
        ) {
            return;
        }

        visit.add(`${r},${c}`); // Mark the cell as visited

        // Explore neighbors
        dfs(r + 1, c, visit, heights[r][c]); // Down
        dfs(r - 1, c, visit, heights[r][c]); // Up
        dfs(r, c + 1, visit, heights[r][c]); // Right
        dfs(r, c - 1, visit, heights[r][c]); // Left
    };

    // Perform DFS for Pacific and Atlantic edges
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific, heights[r][0]); // Pacific (left edge)
        dfs(r, cols - 1, atlantic, heights[r][cols - 1]); // Atlantic (right edge)
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific, heights[0][c]); // Pacific (top edge)
        dfs(rows - 1, c, atlantic, heights[rows - 1][c]); // Atlantic (bottom edge)
    }

    const res = [];

    // Find cells that can reach both oceans
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) {
                res.push([r, c]);
            }
        }
    }

    return res;
};