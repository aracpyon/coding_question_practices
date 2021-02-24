require 'byebug'

# def binary_search(arr, target)
#    return nil if arr.empty? #O(1)

#    mid_idx = arr.length / 2 #O(1)

#    left = arr[0...mid_idx] 
#    right = arr[mid_idx + 1..-1] 

#    case arr[mid_idx] <=> target #O(1)
#    when 1
#       return binary_search(left, target) #O(logn)
#    when 0 
#       return mid_idx
#    when -1 #when target is bigger
#       res = binary_search(right, target) #O(logn)
#       # debugger
#       return res + 1 + mid_idx unless res.nil?
#    end    
# end


def binary_search(arr, target)
   # return nil if arr.empty?

   mid_idx = arr.length / 2
   left = 0
   right = arr.length - 1

   while left <= right
      # debugger
      case arr[mid_idx] <=> target
      when 1 # when mid num is bigger than target
         right = mid_idx - 1
         mid_idx = (left + right) /2
      when 0 
         return mid_idx
      when -1 #when target is bigger than the mid num, check right
         # debugger
         left = mid_idx + 1
         mid_idx = (left + right) / 2
      end
   end
   # return nil
end


def iterative_bsearch(arr, target)
   middle = arr.length / 2
   left = 0
   right = arr.length - 1

   while left <= right
      case arr[middle] <=> target
      when 1 
         right = middle - 1
         middle = (left + right) /2
      when 0 
         return middle
      when -1 
         left = middle + 1
         middle = (left + right) /2
      end
   end
   return nil
end

p binary_search([1, 2, 3, 4, 5, 6, 7, 8], 7) #6
p binary_search([1, 2, 3, 4, 5, 6, 7, 8], 8) #7
p binary_search([1, 2, 3, 4, 5, 6, 7, 8], 4) #3
p binary_search([1, 2, 3, 4, 5, 6, 7, 8], 9) #nil
p binary_search([1, 2, 3, 4, 5, 6, 7, 8], 1) #0
