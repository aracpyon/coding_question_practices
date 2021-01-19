# def twoNumberSum(array, targetSum) # O(n^2) time | O(1)space
# 	(0...array.length - 1).each do |i| 
# 		(i + 1..array.length - 1).each do |j| 
# 			if array[i] + array[j] == targetSum #O(1)
# 				return [array[i], array[j]] #O(1)
# 			end
# 		end
# 	end
# 	return [];
# end


require 'set'

def twoNumberSum(array, targetSum) #O(n) time | O(1) space
   nums = Set.new(array)
   potential_match = 0;

   (0...array.length).each do |i| #O(n)
      potential_match = targetSum - array[i]
      if nums === potential_match && array[i] != potential_match
         return [potential_match, array[i]]
      end
   end
   return [];
end

# time complexity  O(n)
# O(1) space
p twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10) #[11, -1]
p twoNumberSum([4, 6], 10) #[4, 6]
p twoNumberSum([4, 6, 1], 5) #[4,1]
p twoNumberSum([4, 6, 1, -3], 3) #[6, -3]
p twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17) # [8, 9]
p twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18) #[3, 15]
p twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5) #[-5, 0]