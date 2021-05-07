/***
 * 
 * buf = [
 *       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 *       [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 *       [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 *       [S, 0, 0, 1, 0, 0, E, 0, 0, 0, 1, 1, 1, 1],
 *       [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 *       [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 *       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]
 * 
 * ]
 * 
 * s = {x:numer, y:number}
 * e = {x:numer, y:number}
 * 
 * dirs. =[[1, 0], [-1,0], [0, 1], [0, -1] ]
 * 
 */


 function isReachable(buf, s, e) { // return true or false
   const [sx, sy] = s;
   const [ex, ey] = e;
   const visited = [];
   
  if (dfs(buf, s, visited)){
      return true;
  } else {
      return false;
  }
   
   function dfs(buf, currP, visited){
       const [cx, cy] = currP;
       if (cx === ex && cy === ey) return true;
       const dirs = [[1, 0], [-1,0], [0, 1], [0, -1] ];
       
       for (let i = 0; i < dir.length; i++){
           const [dx, dy] = dir;
           const [nx, ny] = [dx + cx, dy + cy]; //newPos
           const ele = buf[nx][ny]
           //vistied?
           //inbound
           
           if ( ele === 0 ){
               visited.push([nx, ny]);
               return dfs(buf, [nx, ny], visited)
           } else if ( ele === 1){
               vistied.push[nx, ny];
               continue;
           } else if (nx === ex && ny === ey){
               visited.push([nx, ny])
               return dfs(buf, [nx, ny], visited)
           }
       } 
   }
}