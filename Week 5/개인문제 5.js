function solution(progresses, speeds) {
    var answer = [];
    var finish = [];
    for( var i = 0 ; i < progresses.length ; i++){
        let percent = progresses[i]
        let spd = speeds[i]
        let days = 0
        for (var j = percent ; j < 100 ; j += spd){
            days += 1
        }
        finish.push(days)
    }
    let count = 1
    let init = finish.shift()
    while(true){
        if(finish.length === 0){
            answer.push(count)
            break;
        }
        let head = finish.shift()
        if( head > init){ //헤드가 더 큰 경우
            answer.push(count) // 현재 카운트 집어넣고
            count = 1 // 카운트 초기화
            init = head // 갱신
        }else{ // 헤드가 작거나 같은경우
            count += 1
        }
    }
    
    return answer;
}
