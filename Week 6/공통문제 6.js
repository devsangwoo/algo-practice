// 1. 숫자와 연산자 분리하기
// 2. 연산자 우선순위 정하기
// 3. 계산하기
// 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/67257#

function solution(expression) {
    var pri = 
        [
        ['-','*','+'],
        ['-','+','*'],
        ['+','*','-'],
        ['+','-','*'],
        ['*','+','-'],
    ]// 전체 경우의 수
    let result = [] // 정답
    for( let oper of pri){ // 루프로 pri에 있는 우선순위를 정하기
        let tmp = expression.split(/(\D)/); // expression에서 문자열 파싱
        for ( let ex of oper){// 이제 우선순위를 정함
            while(tmp.includes(ex)){ // 계속해서 돌거야, 우선순위에 있는 문자가 들어있으면
                let index = tmp.indexOf(ex) // 연산자가 들어있는경우
                // 인덱스 -1부터 3개 뽑아낼거야, index + 2 인 이유는 slice는 end 미포함이니까,
                
                console.log(tmp.slice(index-1, index +2))
                tmp.splice(index -1, 3, eval(tmp.slice(index-1, index +2).join('')))
            }
        }
        result.push(Math.abs(tmp[0]))
    }
    
    return Math.max(...result);
    
}