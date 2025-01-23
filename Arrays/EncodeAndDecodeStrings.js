/**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs - List of strings to encode.
 * @return {string} - Encoded string.
 */
var encode = function(strs) {
    let encoded = "";
    for (let str of strs) {
        // Prefix each string with its length and a delimiter
        encoded += str.length + "#" + str;
    }
    return encoded;
};

/**
 * Decodes a single string to a list of strings.
 * @param {string} s - Encoded string.
 * @return {string[]} - Decoded list of strings.
 */
var decode = function(s) {
    let decoded = [];
    let i = 0;

    while (i < s.length) {
        // Find the delimiter '#' to determine the length of the string
        let j = s.indexOf("#", i);
        let length = parseInt(s.slice(i, j), 10); // Extract and parse length
        let str = s.slice(j + 1, j + 1 + length); // Extract the string
        decoded.push(str);
        i = j + 1 + length; // Move to the next encoded string
    }

    return decoded;
};

// Example usage
const strings = ["hello", "world", "foo#bar", ""];
const encoded = encode(strings);
console.log("Encoded:", encoded); // Example: "5#hello5#world7#foo#bar0#"
const decoded = decode(encoded);
console.log("Decoded:", decoded); // ["hello", "world", "foo#bar", ""]
