// 프로그래머스 :: 문자열 내 p와 y의 개수

function solution(s){
    var answer = true;
    s = s.toLowerCase()
    s = s.split('')
    let countP = s.filter(ele => 'p' === ele).length
    let countY = s.filter(ele => 'y' === ele).length
    countP == countY ? answer = true : answer = false
    return answer;
}
