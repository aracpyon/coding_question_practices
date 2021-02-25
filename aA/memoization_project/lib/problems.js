// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;
    
    memo[n] = lucasNumberMemo(n-1, memo) + lucasNumberMemo(n-2, memo)

    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount, memo = {}) {
    /*
    Clarifying Questions (10min)
        1. input
            - coins array has options: coins.length
            - There are nth options to take. 
            - The coins are listed in ascending order
        2. Output
           - Has to be the minimum change. 
        3. Edge Cases 
            - Can there be a empty array? 
            - Coins can be any coins; it's not real life coin system
            - Amount could be 0.
        4. Assumptions

    Communication Your Approach (Take Notes / Pseudo-code) (25min)
        - I will use memoization and solve it recursively. 
        - I will think of the amount as node 
        - we have options given by the array to reduce the amout. 
        - Each node represents a single recursive call(stack) 
                        N
        N-coins[0]  N-coins[1]  N-coins[2]  N-coins[3] ...
prevN - coins[0] 
        - but there is a rule: you can only use the coin that is smaller or equal to the amount
        - As the amount gets smaller in the tree, I will save that stack tree in the memo. 

        Coding - Clean (Readability), Quick, Semantic Variable Names, Helper Functions (5min)
        Checking For Robustness - Testing Examples

        I don't have to think about coins.length === 0 because all the amount will be eventually 

        minChange([1, 5, 10, 25], 100)

        minChange(coins, amount, memo={})
    */ 
    
    if (amount === 0) return 0; // no coins
    if (amount in memo) return memo[amount];

    // let num_coins = []; //in order to store all the possibilities
    let minCoins:number = Infinity; //minimize the num of coins
    //if you maximize start at -Infinity; 

    coins.forEach( coin:number => { //O(N) on the length of coins
        if (coin <= amount){
            // // Making a recursive call for every coin option 
            // num_coins.push(minChange(coins, amount - coin, memo) + 1)//We need to plus 1 since I used one coin in this stack. 
            // // O(M) on the amount 
            minCoins = Math.min(minChange(coins, amount -coin ,memo) + 1, minCoins) //only compare two numbers 
        }
    })

    //O(N*M)
    //important to define what is N and M 
    // 

    //  memo[amount] = Math.min(...num_coins);//could be another source of complexity 
    memo[amount] = minCoins

    return memo[amount]
    
}




module.exports = {
    lucasNumberMemo,
    minChange
};