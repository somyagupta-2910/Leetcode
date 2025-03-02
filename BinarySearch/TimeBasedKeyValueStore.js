// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:

// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 

// Example 1:

// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]

// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"


// Define the TimeMap class to store key-value pairs with timestamps
var TimeMap = function() {
    // Initialize a map to hold the key-value pairs
    this.map = new Map();
};

/** 
 * @param {string} key - The key to store the value under
 * @param {string} value - The value to be stored
 * @param {number} timestamp - The timestamp associated with the value
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    // If the key does not exist in the map, create a new entry with an empty array
    if(!this.map.has(key)){
        this.map.set(key, []);
    }
    // Push the value and timestamp as a pair into the array for the given key
    this.map.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key - The key to retrieve the value for
 * @param {number} timestamp - The timestamp to check for the value
 * @return {string} - The value associated with the key at the given timestamp
 */
TimeMap.prototype.get = function(key, timestamp) {
    // Retrieve the array of values and timestamps for the given key, or an empty array if the key does not exist
    const arr = this.map.get(key) || [];
    let res = ""; // Initialize the result variable to store the retrieved value
    
    // Initialize left and right pointers for binary search
    let l = 0, r = arr.length - 1;
    // Perform binary search to find the largest timestamp less than or equal to the given timestamp
    while (l <= r) {
        let mid = Math.floor((l + r) / 2); // Calculate the middle index
        // If the timestamp at mid is less than or equal to the given timestamp
        if (arr[mid][1] <= timestamp) {
            res = arr[mid][0]; // Update the result with the value at mid
            l = mid + 1; // Move the left pointer to search for a potentially larger timestamp
        } else {
            r = mid - 1; // Move the right pointer to search for smaller timestamps
        }
    }
    return res; // Return the found value or an empty string if none was found
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */