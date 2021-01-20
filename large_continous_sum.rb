def largest_continuous_sum(arr)
   max = 0
   sum = 0

   arr.each do |ele|
      sum += ele
      if sum > max
         max = sum
      elsif sum < 0
         sum = 0
      end
   end

   max
end

# list = [2, 3, -6, 7, -6, 7] #8
list = [-1, -3, -5] #-1
p largest_continuous_sum([2, 3, -6, 7, -6, 7])

def sumsum(arr)
   sum = arr[0]
   max = arr[0]
 
   # return arr.max if arr.all? { |num| num < 0 }
 
   (1...arr.length).each do |i|
     num = arr[i]
     sum = arr[i]
 
     if sum > max
       max = sum
     elsif sum < 0
       sum = 0 
     end
     sum += num
   end
 
   max
 end
 
 list = [2, 3, -6, 7, -6, 7]
#  list = [-1, -3, -5]
 p sumsum(list)