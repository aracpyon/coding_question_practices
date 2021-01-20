
def merge_sort(arr)
   return arr if arr.length <= 1

   middle = arr.length / 2
   left = arr[0...middle]
   right = arr[middle..-1]

   merged(merge_sort(left), merge_sort(right))
end

def merged(arr1, arr2)
   merged = []
   until (arr1.length < 1 || arr2.length < 1)
     

      if arr1.first <= arr2.first
         merged << arr1.shift
      else
         merged << arr2.shift
      end     
   end

   merged + arr1 + arr2
   
end

p merge_sort([3, 5, 4, 2, 1])