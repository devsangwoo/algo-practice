//프로그래머스 :: 월간 코드 챌린지 시즌 3 : 빛의 경로 사이클

function solution(grid) {
    var answer = [];
    //방문은 방향 * N * M
    var dx = [-1,1,0,0]
    var dy = [0,0,1,-1]
    
    var visited = Array.from({length : grid.length }, () => []).map((c) => {
        for( let i = 0 ; i < grid[0].length ; i++){
            c.push([0,0,0,0])
        }
        return c;
    })
    
    for( let i = 0 ; i < grid.length ; i++){
        for( let j = 0 ; j < grid[0].length ; j++){
            for(let k = 0 ; k <dx.length ; k++){
                let cnt = checker(i,j,k);
                if( cnt){
                    answer.push(cnt)
                }
            }
        }
    }
    
    function checker(i,j,k){
        let count = 0;
        while(true){
            if(visited[i][j][k]){
                break;
            }
            visited[i][j][k] = 1;
            count += 1
            i = i + dx[k]
            j = j + dy[k]
            
            if( i < 0){
                i = grid.length -1
            }
            if( i >= grid.length){
                i = 0;
            }
            if( j < 0 ){
                j = grid[0].length -1
            }
            if( j >= grid[0].length) {
                j = 0
            }
            k = nextDir(grid[i][j], k);
        }
        return count;
    }
    
    function nextDir(node, dir){
        if (node === "S"){
            return dir;
        }else if( node === "L"){
            return [2,3,1,0][dir];
        }else{
            return [3,2,0,1][dir];
        }
    }
    return answer.sort((a,b) => a-b);
}
