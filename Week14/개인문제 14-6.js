//프로그래머스 :: 숫자의 표현
function solution(n) {
    var answer = 0;
    
    for(let i = 0 ; i < Math.floor(n/2)+2 ; i++){       
        let count = 0
        for(let j = i+1 ; j < Math.floor(n/2)+3 ; j++){
            count += j

            if(count === n){
                answer += 1
                break
            }
            else if( count > n){
                break
            }
        }
    }
    return answer+1;
}
