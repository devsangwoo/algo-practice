//코딩테스트 연습 :: 찾아라 프로그래밍 마에스터 :: 게임 맵 최단거리


// bfs or dfs
// n,m까지 돌리고 최소값 찾기
function solution(maps) {
    
    var que = [];
    var answer = 0;
    
    var dx = [1,-1,0,0]
    var dy = [0,0,1,-1]
    
    que.push([0,0])
    while( que.length != 0 ){
        let start = que.shift()
        let x = start[0];
        let y = start[1];
        for( var i = 0 ; i < 4 ; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            if( nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length){
                continue
            }
            if( maps[nx][ny] === 1 ){
                maps[nx][ny] = maps[x][y] + 1
                que.push([nx,ny])
            }
        }
    }
    if( maps[maps.length-1][maps[0].length-1] === 1 || maps[maps.length-1][maps[0].length-1] === 0){
        answer = -1
    }else{
        answer = maps[maps.length-1][maps[0].length-1]
    }
    return answer;
}
