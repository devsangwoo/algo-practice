// 프로그래머스:: 2016년

function solution(a, b) {
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var dayOfWeek = week[new Date(`2016-${a}-${b}`).getDay()];
    var answer = dayOfWeek;
    return answer;
}
