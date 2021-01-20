class Node
   def initialize(name)
      this.name = name
      this.children = []
   end

   def add_child(name)
      this.children << self.class.new(name)
      return this
   end

   def dfs(arr)
      arr << this.name
      this.children.each do |child|
         child.dfs(arr)
      end
      return arr
   end

   def bfs(arr)

   end

   def dfs_with_target(target)
      return self if self.value == target

      self.children.each do |child|
         result = child.dfs(target)
         return result unless result.nil?
      end
      nil
   end

   def bfs_with_target(target)
      
      queue = [self]
      until queue.empty?
         node = queue.shift 
         return node if node.value == target
         queue.concat(node.children)
      end
      nil
   end
   
end