// 프로그래머스 :: 2021 - Dev-Matching: 웹 백엔드 개발

function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0;
    let count = 0;
    for(let i = 0 ; i < 6 ; i++){
        if(lottos[i] === 0 ){
            zeroCount += 1;
        }
        if( win_nums.indexOf(lottos[i]) != -1){
            // 당첨인경우
            count += 1;
        }
    }
    answer.push(grade(count+zeroCount))
    answer.push(grade(count))

    
    function grade(num){
        if (num === 6){
            return 1;
        }
        else if( num === 5){
            return 2;
        }
        else if ( num === 4){
            return 3;
        }
        else if (num === 3){
            return 4;
        }
        else if (num === 2){
            return 5;
        }
        else{
            return 6;
        }
    }
    
    return answer;
}
