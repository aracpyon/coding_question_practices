/*
https://leetcode.com/discuss/interview-question/380650/Bloomberg-or-Phone-or-Candy-Crush-1D

Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board. In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other. This process should be repeated as many time as possible. You should greedily remove characters from left to right.

Example 1:

Input: "aaabbbc"
Output: "c"
Explanation:
1. Remove 3 'a': "aaabbbbc" => "bbbbc"
2. Remove 4 'b': "bbbbc" => "c"
Example 2:

Input: "aabbbacd"
Output: "cd"
Explanation:
1. Remove 3 'b': "aabbbacd" => "aaacd"
2. Remove 3 'a': "aaacd" => "cd"
Example 3:

Input: "aabbccddeeedcba"
Output: ""
Explanation:
1. Remove 3 'e': "aabbccddeeedcba" => "aabbccdddcba"
2. Remove 3 'd': "aabbccdddcba" => "aabbcccba"
3. Remove 3 'c': "aabbcccba" => "aabbba"
4. Remove 3 'b': "aabbba" => "aaa"
5. Remove 3 'a': "aaa" => ""
Example 4:

Input: "aaabbbacd"
Output: "acd"
Explanation:
1. Remove 3 'a': "aaabbbacd" => "bbbacd"
2. Remove 3 'b': "bbbacd" => "acd"
I solved it with recursion and also discussed the stack based approach.

Follow-up:
What if you need to find the shortest string after removal?

Example:

Input: "aaabbbacd"
Output: "cd"
Explanation:
1. Remove 3 'b': "aaabbbacd" => "aaaacd"
2. Remove 4 'a': "aaaacd" => "cd"

stack = [
//Python answer
stack = []
for i in range(len(input)):
        if stack && stack[-1][0] == input[i]:
            stack[-1][1] += 1
        else:
            stack.append([input[i],1])
        if i === str.length-1 || str[i] != str[i+1]:
            if stack[-1][1] >= 3:
                stack.pop()
    #print(stack)
    ans = ''
    for elem in stack:
        ans += elem[0]*elem[1]
    return ans
    
    
print(candy_crush("aaaabbbc")) #c
print(candy_crush("aabbbacd")) #cd
print(candy_crush("aabbba")) #blank expected
print(candy_crush("aabbbaacd")) #cd
print(candy_crush("dddabbbbaccccaax")) # x

*/

function greedyCandyCrush1D(str){
   const stack = [];
   const lastIdx = str.length - 1
   
   for (let char of str){
      const lastStack = stack[str.length - 1];
      if (stack.length && lastStack[0] === char){
         lastStack[1] += 1;
         if (lastStack[1] >= 3){
            stack.pop();
         }
      } else {
         stack.push([char, 1])
      }

      
   }
   let output = '';
   for (let [char, num] of stack){
      output += char.repeat(num)
   }

   return output;
}

/**
 * 
 * The followup question:
 * 
 * https://gist.github.com/atiwari3bu/6feb336753cfc65d58d8b513a8136ae3
 */
function shortestCandyCrush(str){

}