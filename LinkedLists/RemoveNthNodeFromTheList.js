// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    // Create a dummy node that points to head to handle edge cases
    // like removing the first node
    let res = new ListNode(0, head);
    let dummy = res;

    // Advance head pointer n steps forward
    // This creates a gap of n nodes between head and dummy
    for (let i = 0; i < n; i++) {
        head = head.next;
    }

    // Move both pointers until head reaches the end
    // When head is null, dummy will be at the node just before
    // the one we want to remove
    while (head) {
        head = head.next;
        dummy = dummy.next;
    }

    // Remove the nth node from the end by updating the next pointer
    // to skip over one node
    dummy.next = dummy.next.next;

    // Return the head of the modified list
    // We use res.next to skip the dummy node we added at the start
    return res.next;
};