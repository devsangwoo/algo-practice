//프로그래머스 :: 다음 큰 숫자
function solution(n) {
    var answer = 0;
    function countOne(n){
        let count = 0
        for(let i = 0 ; i < n.length ; i++){
            if ( n[i] == 1){
                count += 1
            }
        }
        return count
    }
    
    function compare(a,b){
        if( countOne(a) === countOne(b)){
            return true
        }else{
            return false
        }
    }
    let start = n.toString(2)    
    let end = n + 1
    end = end.toString(2)
    let i = 1
    while (true){
        if(compare(end,start) ){
            answer = parseInt(end, 2)
            break
        }
        end = n + i
        end = end.toString(2)
        i += 1
    }
    
    
    return answer;
}
