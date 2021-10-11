//프로그래머스 : 네트워크

//dfs
function solution(n, computers) {
    var answer = 0;
    var lst = Array.from({length : n}, () => false)
    
    
    function dfs(idx){
        if( lst[idx] === true){
            return;
        }
        lst[idx] = true
        for( let i = 0 ; i < n; i++){
            if(computers[idx][i] === 1){
                dfs(i)
            }
        }
    }
    
    for( let i = 0 ; i < n ; i++){
        if(!lst[i]){
            dfs(i)
            answer += 1
        }
    }
    
    return answer;
}
