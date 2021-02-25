function minChange(coins: number[], amount: number, memo: {[key: number]: number}): number{
   if (amount === 0) return 0; // no coins
    if (amount in memo) return memo[amount];

    // let num_coins = []; //in order to store all the possibilities
    let minCoins:number = Infinity; //minimize the num of coins
    //if you maximize start at -Infinity; 

    coins.forEach( (coin: number) => { //O(N) on the length of coins
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