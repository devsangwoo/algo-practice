function solution(n, lost, reserve) {
    var answer = 0;
    answer = n - lost.length
    
    //중복인경우 !
    for( var i = 1 ; i < n+1 ; i++){
        if( lost.indexOf(i) !== -1 && reserve.indexOf(i) !== -1 ){
            reserve.splice(reserve.indexOf(i),1) //2번 지우고
            lost.splice( lost.indexOf(i),1 )
            answer +=1
        }
    }

    // 1번이랑 막번은 먼저 빌려야함
    
    if( lost.indexOf(1) !== -1 && reserve.indexOf(2) !== -1){
        reserve.splice(reserve.indexOf(2),1) //2번 지우고
        lost.splice( lost.indexOf(1),1 )
        answer += 1 //1명 추가
    }else if(lost.indexOf(n) !== -1 && reserve.indexOf(n-1) !== -1){// n-1번이 여벌을 가져왔으면
        reserve.splice(reserve.indexOf(n-1),1)
        lost.splice( lost.indexOf(n),1 )    
        answer += 1 //1명 추가
    }
    lost.forEach( ele => {
            if(reserve.indexOf(ele-1) !== -1 ){
                reserve.splice(reserve.indexOf(ele-1),1)
                answer += 1 //1명 추가
            }else if( reserve.indexOf(ele+1) !== -1){
                reserve.splice(reserve.indexOf(ele+1),1)
                answer+=1
            }
        })
    
    return answer;
}
