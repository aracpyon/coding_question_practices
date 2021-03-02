// input : String
// output : array with strings at the deepest level
// edgecase : input can be “” => [“”]
// String has [] 
// Lowercase characters
// Nested []
// Balanced arrays(opening, closing)
// Assumptions: [], {}, ()

// Find the string found at deepest level in the brackets 
// "[a{{b}c}d(e)]"  ->  ["b"]
// "((a)b(cd)ef)"    ->  ["a", "cd"]
// "(ab[]c){d{e}}"  ->  ["", "e"]
// "Hello, World!"  ->  ["Hello, World!"]


// for loop to iterate str
// A var containing these options for [], {}, ()
// Set up counter of opening brackets, 
// Variables 
// Make 2 sets one for opening another for closing
// As iterate through, I will see if that character is in opening or closing, whenever I see opening character, counter increments by 1, as soon as I see closing the counter number will be the deepest level I found find, 
// As closing brackets coming, I decrement the counters, so that way I can see how many brackets have close so far. 
// Even if we find another opening brackets later, 

Function deeplyNested(str){
	const opening = new Set('[', '{', '(');
	const closing = new Set(']', '}', ')');
	const hash = {};
	Let counter = 0;
Const output = [];
Let newStr = “”;
	For (let i =0; i < str.length; i++){
		Const char = str[i];
		
		If (char in opening) {
Counter++;

str = “”;
} else if (char in closing) {
Counter--;
If (Hash[counter] === undefined) {
	hash[counter] = [];
}
Hash[counter].push(newStr);
} else {
str = str + char;
		
	}
	Const deepest = Math.max(...Object.keys(hash))
	Return hash[deepest];
}

// O(n) Time complexity
// O(n) 
