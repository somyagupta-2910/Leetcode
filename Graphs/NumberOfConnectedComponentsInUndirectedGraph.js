// Function to count the number of connected components in an undirected graph
var countComponents = function(n, edges) {
    // Create an adjacency list to represent the graph
    const adjList = new Array.from({length:n}, () => []);

    // Populate the adjacency list with edges
    for (const [u, v] of edges){
        adjList[u].push(v); // Add edge from u to v
        adjList[v].push(u); // Add edge from v to u (undirected graph)
    }

    // Set to keep track of visited nodes
    const visited = new Set();

    // Depth-first search function to explore the graph
    var dfs = function(node){
        // If the node has already been visited, return to avoid cycles
        if(visited.has(node)){
            return;
        }

        // Mark the current node as visited
        visited.add(node);

        // Recursively visit all neighbors of the current node
        for(const neighbor of adjList[node]){
            dfs(neighbor); // Perform DFS on the neighbor
        }
    }

    let components = 0; // Initialize the count of connected components

    // Iterate through all nodes in the graph
    for (let i=0; i<n; i++){
        // If the node has not been visited, it indicates a new component
        if(!visited.has(i)){
            dfs(i); // Perform DFS to mark all nodes in this component
            components++; // Increment the component count
        }
    }

    return components; // Return the total number of connected components
};