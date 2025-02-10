// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Function to determine if all courses can be finished given prerequisites
var canFinish = function(numCourses, prerequisites) {
    // Create a map to hold the prerequisites for each course
    const preMap = Array.from({length: numCourses}, () => []);

    // Populate the preMap with prerequisites
    for (const [course, prereq] of prerequisites){
        preMap[course].push(prereq); // Add the prerequisite for the course
    }

    // Set to keep track of visited courses to detect cycles
    visit = new Set();

    // Depth-first search function to check if a course can be completed
    var dfs = function(course){
        // If the course has already been visited, a cycle is detected
        if (visit.has(course)){
            return false;
        }
        // If there are no prerequisites for the course, it can be completed
        if (preMap[course].length == 0){
            return true;
        }

        // Mark the course as visited
        visit.add(course);
        // Check all prerequisites for the current course
        for (const prereq of preMap[course]){
            // If any prerequisite cannot be completed, return false
            if(!dfs(prereq)){
                return false;
            }
        }
        // Unmark the course as visited (backtrack)
        visit.delete(course);
        // Clear the prerequisites for the course to avoid rechecking
        preMap[course] = [];

        return true; // All prerequisites can be completed
    }

    // Iterate through all courses to check if they can be completed
    for (let i = 0; i < numCourses; i++) {
        // If any course cannot be completed, return false
        if (!dfs(i)) {
            return false; // If a cycle is detected, return false
        }
    }
    return true; // All courses can be completed
};