/**
 * 
 * @param {*} prices 
 * 
 *
 * input is an array of prices
 * let min: to track of the minimum number in the array
 * let maxProfit = 0: update profit whenever current price - min is bigger than previous max, 
 * when there is no profit, return 0
 */

function maxProfit(prices){
   let minPrice = Infinity;
   let maxProfit = 0;

   for (let i = 0; i < prices.length; i++){
      if (prices[0] < minPrice){
         minPrice = prices[0]
      } else if (maxProfit < prices[0] - minProfit){
         maxProfit = Prices[0] - minProfit;
      }
   }
   return maxProfit
}