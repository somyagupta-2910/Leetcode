// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.

 

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


var solve = function(board) {
    // Get dimensions of the board
    const rows = board.length;
    const cols = board[0].length;

    // DFS helper function to mark connected 'O' cells that are not surrounded
    var dfs = function(r, c){
        // Base case: return if out of bounds or not an 'O' cell
        if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != 'O'){
            return;
        }
        // Mark this cell as temporarily visited by changing 'O' to 'T'
        board[r][c] = 'T';
        // Recursively check all 4 adjacent cells
        dfs(r+1, c); // Down
        dfs(r-1, c); // Up 
        dfs(r, c+1); // Right
        dfs(r, c-1); // Left
    }

    // Step 1: Mark all 'O' cells connected to border as 'T'
    // These cells cannot be surrounded since they touch the border
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Check if the cell is on the border
            if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
                if (board[r][c] === 'O') {
                    dfs(r, c); // Start DFS for border 'O' cells
                }
            }
        }
    }

    // Step 2: Convert all remaining 'O' cells to 'X'
    // These are the surrounded regions
    for (let r=0; r<rows; r++){
        for (let c=0; c<cols; c++){
            if (board[r][c] == 'O'){
                board[r][c] = 'X';
            }
        }
    }

    // Step 3: Convert back all temporary 'T' cells to 'O'
    // These were the unsurrounded regions we marked earlier
    for (let r=0; r<rows; r++){
        for (let c=0; c<cols; c++){
            if (board[r][c] == 'T'){
                board[r][c] = 'O';
            }
        }
    }
};