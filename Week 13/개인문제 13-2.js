// 프로그래머스 :: 수박수박수박수?
function solution(n) {
    var answer = '';
    for(let i = 0 ; i < n ; i++){
        i%2 == 0 ? answer += '수' : answer += '박'
    }
    return answer;
}
