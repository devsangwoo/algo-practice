//프로그래머스 :: 소수 찾기
function solution(n) {
    var answer = -2;
    let array = Array.from({length : n+1}, () => 0)

    for(let i = 2 ; i < n+1 ; i++){
        if(array[i] === 0){
            for(let j = 2 ; j*i < n+1 ; j++){
                array[i*j] += 1
            }
        }
    }
    array.forEach(ele => {
        ele === 0 ? answer += 1 : null
    })
    
    return answer;
}
