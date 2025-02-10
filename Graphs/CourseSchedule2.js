// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Function to find the order of courses to take based on prerequisites
var findOrder = function(numCourses, prerequisites) {
    // Create a map to hold the prerequisites for each course
    const preMap = Array.from({length: numCourses}, () => []);

    // Populate the preMap with prerequisites
    for (const [course, prereq] of prerequisites){
        preMap[course].push(prereq); // Add the prerequisite for the course
    }

    // Set to keep track of visited courses to avoid cycles
    visit = new Set();
    // Set to keep track of courses currently in the recursion stack to detect cycles
    cycle = new Set();
    // Array to store the order of courses
    res = []

    // Depth-first search function to check if a course can be completed
    var dfs = function(course){
        // If the course is already in the cycle, a cycle is detected
        if (cycle.has(course)){
            return false; // Cannot complete due to cycle
        }
        // If the course has already been visited, it can be completed
        if (visit.has(course)){
            return true; // No need to check again
        }

        // Add the course to the cycle set
        cycle.add(course);

        // Check all prerequisites for the current course
        for (const prereq of preMap[course]){
            // If any prerequisite cannot be completed, return false
            if (!dfs(prereq)){
                return false; // Cycle detected or prerequisite cannot be completed
            }
        }
        // Mark the course as visited
        visit.add(course);
        // Remove the course from the cycle set as we are done processing it
        cycle.delete(course);
        // Add the course to the result order
        res.push(course);

        return true; // All prerequisites can be completed
    }

    // Iterate through all courses to check if they can be completed
    for (let i=0; i<numCourses; i++){
        // If any course cannot be completed, return an empty array
        if(!dfs(i)){
            return [];
        }
    }

    // Return the order of courses to take
    return res;
};