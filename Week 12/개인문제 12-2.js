// 프로그래머스 :: 피보나치 수

function solution(n) {
    var answer = 0;
    let fibo = [0,1,1]
    //6 inx부터 시작하기
    for(let i = 3 ; i <= n ; i++){
        fibo.push(fibo[i-1]%1234567 + fibo[i-2]%1234567)
    }
    answer = fibo[n]%1234567
    return answer;
}
