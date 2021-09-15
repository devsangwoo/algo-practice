// 프로그래머스 :: 2021 KAKAO BLIND RECRUITMENT

function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\d\w-_.]/g, '') // \d 숫자와, \w 문자와, -_.가 아닌거 모두라는 의미의 정규식
        .replace(/\.{2,}/g, '.') // "."이라는 단어가 2개 이상 반복되는가?
        .replace(/^\.|\.$/g, '') // 시작과 끝이 .인가?
        .padEnd(1,"a")
        .slice(0,15)
        .replace(/^\.|\.$/g, '') // 시작과 끝이 .인가?
    return answer.padEnd(3, answer[answer.length-1])
}

//정규식으로 표현하면 이렇게 쉽습니다..


//정규식 몰랐을때 코드
//결론 :: 정규식을 좀 공부하자
function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase()
    new_id = new_id.split('')
    var checkAlpha = /[a-z]/;
    var checkSpc = /[-_.]/;
    var checkNumber = /[0-9]/;

    let checker = []
    for( let i = 0 ; i < new_id.length ; i++){
        if( checkAlpha.test(new_id[i]) || checkSpc.test(new_id[i]) || checkNumber.test(parseInt(new_id[i])) ){
            checker.push(new_id[i])
        }
    }
    new_id = checker

    let newId = []
    newId.push(new_id[0])
    for (let i = 1 ; i < new_id.length ; i++){
        if(new_id[i] === "."){
            if(newId[newId.length-1] != "."){
                newId.push(new_id[i])
            }    
        }else{
            newId.push(new_id[i])
        }
    }

    if( newId[0] === "."){
        newId.splice(0,1)
    }
    if( newId[newId.length -1] === "."){
        newId.splice(newId.length -1,1)
    }

    if( newId.length === 0){
        newId.push("a")
    }

    if(newId.length >= 16){
        newId = newId.slice(0,15)
    }
    if( newId[newId.length -1] === "."){
        newId.splice(newId.length -1,1)
    }

    if( newId.length === 1){
        newId.push(newId[0])
        newId.push(newId[0])
    }
    if( newId.length === 2){
        newId.push(newId[1])
    }


    answer = newId.join('')

    return answer;
}
