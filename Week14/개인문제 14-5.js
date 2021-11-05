// 프로그래머스 : 최대공약수와 최소공배수

function solution(n, m) {
    var answer = [];
    let GCD = (a,b) => b > 0 ? GCD(b, a%b) : a
    let gcdNum = GCD(n,m)
    let LCM = n*m / gcdNum
    answer.push(gcdNum,LCM)
    return answer;
}
