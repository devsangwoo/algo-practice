//월간 코드 챌린지 시즌1 :: 3진법 뒤집기

function solution(n) {
    var answer = 0;
    var converted = []

    while(n !== 0 ){
        converted.push(n%3);
        n = Math.floor(n/3); 
    }
    
    converted = converted.join('')
    console.log(converted)
    answer = parseInt(converted,3)
    
    return answer;
}
