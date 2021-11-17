// 프로그래머스 :: 방문 길이
function solution(dirs) {
    //게임 기본 사이즈는? 0~ 10 * 0~ 10    
    //초기 시작 위치
    let x = 5
    let y = 5
    
    //U,D,R,L 순서
    let dx = [-1,+1,0,0]
    let dy = [0,0,+1,-1]
    
    //기록용
    let trace = new Set()
    
    for( let i = 0; i < dirs.length ; i++){
        let nx = 0
        let ny = 0
        if( dirs[i] === 'U' ){
            nx = dx[0]
            ny = dy[0]
        }else if( dirs[i] === 'D'){
            nx = dx[1]
            ny = dy[1]
        }else if( dirs[i] === 'R'){
            nx = dx[2]
            ny = dy[2]
        }else if( dirs[i] === 'L'){
            nx = dx[3]
            ny = dy[3]
        }
        if( x + nx < 0 || x + nx >= 11){
            continue
        }
        if( y + ny < 0 || y + ny >= 11){
            continue
        }
        x = x + nx
        y = y + ny
        trace.add(`${x},${y},${x-nx},${y-ny}`)
        trace.add(`${x-nx},${y-ny},${x},${y}`)
        
    }
    var answer = trace.size/2;
    return answer;
}
