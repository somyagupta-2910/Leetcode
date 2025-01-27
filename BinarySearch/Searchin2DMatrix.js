var searchMatrix = function(matrix, target) {
    // Get dimensions of matrix
    let [rows, cols] = [matrix.length, matrix[0].length];
    // Initialize pointers for binary search on rows
    let [top, bot] = [0, rows-1];
    
    // First binary search to find the correct row
    while(top <= bot){
        let row = Math.floor((top +  bot) / 2);
        if(target > matrix[row][cols-1]) {
            // Target is greater than largest element in current row, search lower rows
            top = row + 1;
        } else if(target < matrix[row][0]) {
            // Target is less than smallest element in current row, search upper rows
            bot = row - 1; 
        } else {
            // Target could be in this row, break to search it
            break;
        }
    }
    
    // If pointers crossed, target cannot be in matrix
    if(!(top <= bot)) {
        return false;
    }
    
    // Get the row where target might exist
    let row = Math.floor((top + bot) / 2);
    // Initialize pointers for binary search within the row
    let [left, right] = [0, cols - 1];

    // Second binary search to find target in the identified row
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(target > matrix[row][mid]) {
            // Target is to the right
            left = mid + 1;
        } else if(target < matrix[row][mid]) {
            // Target is to the left
            right = mid - 1;
        } else if(target == matrix[row][mid]) {
            // Target found
            return true;
        }
    }

    // Target not found in the row
    return false;   
};