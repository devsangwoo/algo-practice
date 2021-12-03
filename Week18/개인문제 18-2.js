// 프로그래머스 :: 가장 큰 수 
function solution(numbers) {
    var answer = '';
    for(let i = 0 ; i < numbers.length ; i++){
        numbers[i] = numbers[i].toString()
        numbers[i] = numbers[i] +numbers[i] +numbers[i]
    }
    numbers.sort().reverse()
    for( let i = 0 ; i < numbers.length ; i++){
        answer += numbers[i].slice(numbers[i].length/3 *2)
    }
    if( answer == 0){
        answer = "0"
    }
    return answer;
}
