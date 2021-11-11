//프로그래머스 : 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    var answer = [];
    for(let i =0 ; i < strings.length ; i++){
        strings[i] = strings[i].padStart(strings[i].length + 1,strings[i][n])
    }
    strings.sort()
    for(let i = 0; i < strings.length ; i++){
        strings[i] = strings[i].slice(1,strings[i].length+1)
    }
    answer = strings
    return answer;
}
