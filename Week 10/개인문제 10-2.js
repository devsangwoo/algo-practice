// 프로그래머스 고득점 Kit :: 타겟 너버

function solution(numbers, target) {
    var answer = 0;
    function dfs(n, count){
        if (n === numbers.length){
            if ( count === target){
                answer += 1
                return
            }
            else{
                return
            }
        }
        dfs(n+1,count+numbers[n])
        dfs(n+1,count-numbers[n])
        
    }
    dfs(0,0)
    return answer;
}
