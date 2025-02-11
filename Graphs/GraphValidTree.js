// Function to determine if a given graph is a valid tree
var validTree = function(n, edges) {
    // Create a map to store the adjacency list of the graph
    const adjList = new Array.from({length: n}, () => []);

    // Populate the adjacency list with edges
    for (const [u, v] of edges) {
        adjList[u].push(v); // Add edge from u to v
        adjList[v].push(u); // Add edge from v to u (undirected graph)
    }

    // Set to keep track of visited nodes
    const visited = new Set();

    // Depth-first search function to explore the graph
    var dfs = function(node, parent) {
        // If the node has already been visited, a cycle is detected
        if (visited.has(node)) {
            return false;
        }

        // Mark the current node as visited
        visited.add(node);

        // Explore all neighbors of the current node
        for (const neighbor of adjList[node]) {
            // Skip the parent node to avoid immediate backtracking
            if (neighbor === parent) {
                continue;
            }

            // Recursively perform DFS on the neighbor
            if (!dfs(neighbor, node)) {
                return false; // If a cycle is detected in the recursion, return false
            }
        }

        return true; // No cycles detected, return true
    }

    // Start DFS from the first node (0) with no parent (-1)
    if (!dfs(0, -1)) {
        return false; // If DFS returns false, the graph is not a valid tree
    }

    // Check if all nodes were visited (i.e., the graph is connected)
    return visited.size === n; // Return true if all nodes are visited
}