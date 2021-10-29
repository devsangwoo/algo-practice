//프로그래머스 :: 완주하지 못한 선수

function solution(participant, completion) {
    var answer = '';
    let list = {}
    for (let i = 0 ; i < participant.length ; i++){
        if(list[participant[i]]){
            list[participant[i]] += 1
        }else{
            list[participant[i]] = 1
        }
    }
    
    for(let i = 0 ; i < completion.length ; i++){
        list[completion[i]] -= 1
        if( list[completion[i]] === 0 ){
            delete list[completion[i]]
        }
    }
    answer = Object.keys(list)
    
    return answer[0];
}
