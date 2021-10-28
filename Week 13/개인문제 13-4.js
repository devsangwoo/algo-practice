// 프로그래머스 :: JadenCase 문자열 만들기
function solution(s) {
    var answer = '';
    let check = true
    s = s.toLowerCase()
    s = s.split('')
    for(let i = 0 ; i < s.length ; i++){
        if( s[i] != ' ' && check){
            s[i] = s[i].toUpperCase()
            check = false
        }
        if(s[i] === ' '){
            check = true
        }
    }
    answer = s.join('')
    return answer;
}
