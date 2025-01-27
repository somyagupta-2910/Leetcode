var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to serve as the head of our merged list
    let dummy = new ListNode();
    // Current pointer to build the merged list
    let curr = dummy;

    // Continue while both lists have nodes to compare
    while(list1 && list2){
        // If list1's value is smaller, add list1's node to merged list
        if (list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        }
        // Otherwise add list2's node to merged list
        else{
            curr.next = list2;
            list2 = list2.next;
        }
        // Move current pointer forward
        curr = curr.next;
    }

    // Attach remaining nodes from whichever list is not empty
    // If both are empty, this will attach null
    curr.next = list1 || list2;

    // Return head of merged list (skip the dummy node)
    return dummy.next;
};