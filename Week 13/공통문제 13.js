//2018 KAKAO BLIND RECRUITMENT :: [1차] 프렌즈4블록

function solution(m, n, board) {
    var answer = 0;
    //1. 왼쪽 위로만 검사했을때 터트리기
    //그러면 인덱스는 1번 row부터 최대 -1 col까지
    // m = row, n = col
    function boom(x,y,target){
        if(target === '-'){
            return false
        }
        if( target === board[x-1][y] && target === board[x-1][y+1] && target === board[x][y+1]){
            return true
        }
        return false
    }
    
    for(let i = 0 ; i < m ; i++){
        board[i] = board[i].split('')
    }
    while(true){
        let boomList = []
        let checker = true
        
        //1 터지는거 찾고 터트리기
        for( let i = 1; i < m; i++){
            for(let j = 0 ; j < n-1 ; j++){
                if(boom(i,j,board[i][j])){
                    boomList.push([i-1,j])
                    boomList.push([i-1,j+1])
                    boomList.push([i,j+1])
                    boomList.push([i,j])
                    checker = false
                }
            }
        }
        if(checker){
            break
        }
        for(let i =0  ; i < boomList.length ; i++){
            let a = boomList[i][0]
            let b = boomList[i][1]
            board[a][b] = "-"
        }
        //아래로 내리기
        for( let k = 0 ; k < m-1 ; k++){
            for( let j = 0 ; j < n; j++){
                for(let i = 0 ; i < m-1 ; i++ ){
                    if( board[i][j] != '-' && board[i+1][j] === '-'){
                        [board[i][j], board[i+1][j]] = [ board[i+1][j], board[i][j]]
                    }
                }
            }
        }
    }
    
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            board[i][j] === '-' ? answer +=1 : null
        }
    }
    
    return answer;
}
