def quicksort(arr)
   return arr if arr.length < 2
   pivot = arr.first

   left_side = []
   right_side = []

   (1...arr.length).each do |idx|
      if arr[idx] < pivot
         left_side << arr[idx]
      else
         right_side << arr[idx]
      end
   end

   quicksort(left_side) + [pivot] + quicksort(right_side)
end

p quicksort([4, 6, 2, 1, 7])
p quicksort([10, 8, 3, 5 ,9])


def quicksort(arr)
   return arr if arr.length < 2

   pivot = arr.first
   
end