// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

// Function to find the redundant connection in a graph represented by edges
var findRedundantConnection = function(edges) {
    // Initialize parent array where each node is its own parent
    const par = Array.from({length: edges.length + 1}, (_, i) => i);
    // Initialize rank array to keep track of the tree height for union by rank
    const rank = new Array(edges.length + 1).fill(1);

    // Helper function to find the root parent of a node using path compression
    var find = function(n) {
        let p = par[n];

        // Traverse up the tree to find the root parent
        while (p !== par[p]) {
            // Path compression: make the parent of the current node point to its grandparent
            par[p] = par[par[p]];
            p = par[p];
        }

        return p; // Return the root parent
    }

    // Helper function to union two nodes
    var union = function(n1, n2) {
        let p1 = find(n1); // Find the root parent of the first node
        let p2 = find(n2); // Find the root parent of the second node

        // If both nodes have the same root parent, they are already connected
        if (p1 == p2) {
            return false; // Indicate that a cycle is detected
        }

        // Union by rank: attach the smaller tree under the larger tree
        if (rank[p1] > rank[p2]) {
            par[p2] = p1; // Make p1 the parent of p2
            rank[p1] += rank[p2]; // Update the rank of p1
        } else {
            par[p1] = p2; // Make p2 the parent of p1
            rank[p2] += rank[p1]; // Update the rank of p2
        }
        return true; // Indicate successful union
    }

    // Iterate through each edge in the graph
    for (const [n1, n2] of edges) {
        // If union fails, it means adding this edge creates a cycle
        if (!union(n1, n2)) {
            return [n1, n2]; // Return the redundant edge
        }
    }
};