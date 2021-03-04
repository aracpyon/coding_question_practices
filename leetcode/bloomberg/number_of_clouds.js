Number of clouds
Sky => matrix with 0s
Clouds => connected with 1 (only horizontally and vertically)
[0,0,0,0,0,1,1]
[0,1,1,0,0,1,1]
[0,0,1,0,0,0,0]
[0,0,0,0,1,1,0]
Output: 3

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Input => 2D
Output just number of clouds 
Assume the input is always valid, all the subarrs length is the same
No clouds return 0

[0,0,0,0,0,1,1]
[0,1,1,0,0,1,1]
[0,0,1,0,0,0,0]
[0,0,0,0,1,1,0]
[0, 5], [0, 6]
[1, 5], [1, 6]
[1, 1] [1, 2]
       [2, 2]

Whenever x is the same, we have check y is also connected
Whenever y is same, we have x is connected 

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
0 
0 0 1 1
0 0 0 0
If the value at our current position is “0”
If the row or column idx is out of bounds
Queue = [grid[0]]
queue[0].eachFor(
Check if ele === 1

)
set = {[0,0], [0, 1], [0,2]}
Function numClouds(grid){

}
Function dfs(grid, location){
	Const [a, b] = location;
	If (grid[a][b] === 0 || (a > grid.length - 1 || b > grid[0].length) ) return;
	grid[a][b] = 0;
	Const moves = [[1,0], [0,1], [-1,0], [0, -1]];
	moves.forEach((move) => {
		Const [x, y] = location;
		Const newLocation = [move[0] + x, move[1] + y];
		dfs(grid, newLocation);
			
			Dfs(grid 
})
}
