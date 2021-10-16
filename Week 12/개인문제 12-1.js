//월간 코드 챌린지 시즌 1 : 이진 변환 반복하기

function solution(s) {
    var answer = [];
    let countZero = 0
    let count = 0
    function binaryConverter(s){
        let first = s.length
        s = s.replace(/0/g,"")
        let last = s.length
        countZero += (first - last )
        let result = last.toString(2)
        count += 1
        return result
    }
    let result = binaryConverter(s)
    while(true){
        if(result === '1'){
            break
        }
        else{
            result = binaryConverter(result)
        }
    }
    answer.push(count)
    answer.push(countZero)
    return answer;
}
