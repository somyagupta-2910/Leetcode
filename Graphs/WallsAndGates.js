// Function to find shortest distance from each empty room to nearest gate
// rooms: m x n grid where:
// - 0 represents a gate
// - -1 represents a wall
// - 2147483647 represents an empty room
const wallsAndGates = function(rooms) {
    // Get dimensions of the grid
    const rows = rooms.length;
    if (rows === 0) return;
    const cols = rooms[0].length;

    // Define possible directions to move (up, down, left, right)
    const directions = [
        [1, 0],  // Down
        [-1, 0], // Up
        [0, 1],  // Right
        [0, -1]  // Left
    ];

    // Queue for BFS traversal
    const queue = [];

    // Step 1: Add all gates to the queue as starting points
    // This allows us to process all gates simultaneously
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {  // If cell is a gate
                queue.push([r, c]);
            }
        }
    }

    // Step 2: Perform BFS from all gates simultaneously
    // This ensures we find shortest path from each room to nearest gate
    while (queue.length > 0) {
        const [row, col] = queue.shift(); // Get next cell from queue

        // Check all adjacent cells in each direction
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Skip if:
            // - Cell is out of bounds
            // - Cell is a wall (-1)
            // - Cell is a gate (0)
            // - Cell has already been visited (not 2147483647)
            if (
                newRow < 0 || newRow >= rows || 
                newCol < 0 || newCol >= cols || 
                rooms[newRow][newCol] !== 2147483647
            ) {
                continue;
            }

            // Update distance of current room
            // Distance = parent's distance + 1
            rooms[newRow][newCol] = rooms[row][col] + 1;
            // Add room to queue for further processing
            queue.push([newRow, newCol]);
        }
    }
};
