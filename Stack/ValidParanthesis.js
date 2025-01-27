var isValid = function(s) {
    const stack = [];
    const hashMap = {')':'(', ']':'[', '}':'{'};

    for (const char of s){
        if (char in hashMap) {
            if (stack.length && stack[stack.length - 1] == hashMap[char]){
                stack.pop();
            }
            else{
                return false;
            }
        }
        else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};