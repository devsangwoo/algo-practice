// 프로그래머스 최댓값과 최솟값

function solution(s) {
    var answer = [];
    s = s.split(' ')
    let maxi = Math.max(...s)
    let mini = Math.min(...s)
    answer.push(mini)
    answer.push(maxi)
    answer = answer.join(' ')
    return answer;
}
