//프로그래머스 :: 예산
function solution(d, budget) {
    var answer = 0;
    d.sort((a,b) => a-b)
    console.log(d)
    let total = 0
    for( let i =0 ; i < d.length ; i++){
        total += d[i]
        answer += 1
        if( total > budget){
            answer -= 1 
            break
        }else if( total === budget){
            break;
        }
    }
    return answer;
}
