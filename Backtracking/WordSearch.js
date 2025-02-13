// Function to determine if a word exists in a 2D board of characters
var exist = function(board, word) {
    const rows = board.length; // Get the number of rows in the board
    const cols = board[0].length; // Get the number of columns in the board

    const visited = new Set(); // Set to keep track of visited cells

    // Depth-first search (DFS) function to explore the board
    const dfs = function(r, c, i){
        // If the index i equals the length of the word, the word has been found
        if (i === word.length){
            return true;
        }

        // Check for out-of-bounds conditions, character mismatch, or already visited cell
        if(r < 0 || c < 0 || r >= rows || c >= cols || word[i] != board[r][c] || visited.has(`${r},${c}`)){
            return false; // Return false if any condition is met
        }

        visited.add(`${r},${c}`); // Mark the current cell as visited

        // Recursively search in all four possible directions (up, down, left, right)
        let res = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1);
        
        visited.delete(`${r},${c}`); // Backtrack: unmark the current cell

        return res; // Return the result of the search
    }

    // Iterate through each cell in the board
    for (let r=0; r<rows; r++){
        for(let c=0; c<cols; c++){
            // Start DFS from the current cell if the word can be found
            if(dfs(r,c,0)){
                return true; // Return true if the word is found
            }
        }
    }
    return false; // Return false if the word is not found in the board
};