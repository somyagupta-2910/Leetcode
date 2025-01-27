var reverseList = function(head) {
    // Initialize previous pointer as null since first node will point to null
    let prev = null;
    // Start current pointer at head of list
    let curr = head;

    // Traverse list until we reach the end
    while (curr){
        // Store next node before we change current's next pointer
        let temp = curr.next;
        // Reverse the link - point current node to previous node
        curr.next = prev;
        // Move previous pointer to current node
        prev = curr;
        // Move current pointer to next node using stored temp
        curr = temp;
    }
    // Return prev which is now pointing to the new head (original tail)
    return prev;
};