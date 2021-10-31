//프로그래머스 : 문자열 내림차순으로 배치하기
function solution(s) {
    var answer = '';
    s = s.split('')
    s.sort()
    s.reverse()
    s = s.join('')
    answer = s
    return answer;
}
