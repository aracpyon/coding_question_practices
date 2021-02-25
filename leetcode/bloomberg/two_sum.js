var twoSum = function(nums, target) {
    
   /*
       1. brute 
       
       1. Algo
       nums = [3,2,4,7,11,12,1,-14] O(n**2)
       
       1. sort the nums arr O(N*logN) 
       2. make two pointers (one for 0, another for nums.length -1)
       3. move pointers based on its sum is less or larger than target
       4. if the sum matches with target, return an arr with those vars
       5. 
                              v
            [-14, 1, 2, 3, 4, 7, 11, 12] target = 9 O(N) linear 
                     ^
                     
       Space complexity = O(1)
       
       
       2. Data Structure
       - Tree
       - Hash 
       - Array
       - Linked List
        x + y = z
        
        {g
          y : x's index 
        }
        How do we find y??????? 
        
        As you iterate, fill up the hash and check if that number is key and if you find the matching key return it 
        O(n) : linear 
        
        
      [3,2,4,7,11,12,1,-14] , 9 
   */
   
   const complement = {}; 
   /*
   {6: 0, 7: 1, 5:2, }
   */
   let diff = 0;
   
   for (let i = 0; i < nums.length; i++){
       if (complement[nums[i]] !== undefined) return [complement[nums[i]], i];
       diff = target - nums[i]; // 6
       complement[diff] = i;
   }
   
   
};