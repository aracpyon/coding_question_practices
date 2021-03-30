This doc is to organize the patterns and types of questions

# Array

## SWT: Sliding window technique

https://youtu.be/jM2dhDPYMQM

- Used for finding `subarrays` in an array that satisfy given conditions
- Maintain a subset of items as your window and resize and move that window within the larger list until you find a solution
- Subset of `Dynamic Programming` 
   - (techinique of solving a problem by dividing it into sub problems)
- T: O(N) linear time
- T: O(1) constant space

- useful for **subArra/subStr** related questions

### SWT: how does it work?
#### (Easy) Statically sized sliding window
1. Given an array of integers, find max sum subArr of the required size
- input: [-1, 2, 3, 1, -3, 2]
- subArr size: 2

+ Analysis:
   * input size is unlimited so memory can blow up if we are not careful of what we keep in memory
      * Do not pre-calculate and store all possible values
      * NO recursion; call stack will overflow
   * Think through all DS that can be utilized

+ Brute force:
   - calculate all possible subarrays with 2 members and store them in a hash table(map)
   - Iterate over the hash table until you find the subarray with the maximum sum.
   - O(n) for time O(N) for space

+ Sliding window (statically sized)
   - start calculating window sum starting with the first 2 ele
   - slide the window by one element at a time
   - O(N) for time
   - O(1) for space

## Kadane's Algorithm
* 53. https://leetcode.com/problems/maximum-subarray/
* 152. https://leetcode.com/problems/maximum-product-subarray/

It's like dynamic programming
