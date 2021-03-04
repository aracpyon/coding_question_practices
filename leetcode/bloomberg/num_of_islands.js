var numIslands = function(grid) {
    
    
   function dfs(grid, location){
       const [x, y] = location;
       debugger
       if (grid[x][y] === "0" || (x >= grid.length || y >= grid[0].length)) return;
       
       //when the location is 1...
       grid[x][y] = '0';
       
       const moves = [[1, 0], [-1,0], [0, 1], [0, -1]];
       
       moves.forEach((move)=> {
           const [m1, m2] = move;
           const adjacent = [location[0] + m1, location[1] + m2];
           
           dfs(grid, adjacent);
       })
   }
   
   let i = 0;
   let j = 0;
   let numIslands = 0;
   
   while ( i < grid.length){
        grid[i].forEach((ele, j) => {
            if (ele === "1"){
               debugger
               dfs(grid, [i, j]);
               numIslands++;
            }
        })
       // while (j < grid[0].length){
       //     if (grid[i][j] === "1"){
       //         dfs(grid, [i, j]);
       //         numIslands++;
       //         j++;
       //     }
       // }
       
       i++
   }
   
   return numIslands;
};

const grid = [
   ["1","1","1","1","0"],
   ["1","1","0","1","0"],
   ["1","1","0","0","0"],
   ["0","0","0","0","0"]
 ];

//  numIslands(grid)