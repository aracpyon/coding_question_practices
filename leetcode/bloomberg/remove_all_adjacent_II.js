// Keep track of the characters that we have encountered and its count
// If the character is in the bottom of the stack, meaning we have a duplicate, increment its count by 1
// If not a dup, append it to the stack with count of 1
// If the character's count equals to k, removing it by pop this element off the stack
// For everything that's remained in the stack, iterate over and repeat base on its count
var removeDuplicates = function(s, k) {
    const stack = [];
    
    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1;
            if(stack[stack.length-1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    
    let res = '';
    
    for(let [char, count] of stack) {
        res += char.repeat(count);
    }
    
    return res;
};