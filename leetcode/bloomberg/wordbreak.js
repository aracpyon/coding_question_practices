function wordBreak (s, wordDict) {

const dictionary = new Set(wordDict);
    let str = "";
    
    for (let i= 0; i < s.length; i++){
        str = str + s[i];
        debugger
        if (dictionary.has(str)){
            str = "";
        } 
    }
    debugger
    return !str; //
};

const str = "catsandog"
const input = ["cats","dog","sand","and","cat"];

"aaaaaaa"
["aaaa","aaa"]