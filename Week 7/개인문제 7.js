// 프로그래머스 :: 위클리 챌린지 7주차
// 26, 27 시간초과 94.1점
// ㅡㅡㅡㅡㅡ2021-09-13ㅡㅡㅡㅡㅡㅡ

// 다 넣어놓고 빠질때 앞에있는 애들은 다 만난거고
// 앞에있는 애들 끼리도 다 만난거
// 2차원 배열 만들어놓고, 만난사람 추가 한 후, 마지막에 길이 return 해 주기
function solution(enter, leave) {
    var answer = [];
    var grp = [];
    for ( var i = 0 ; i < enter.length ;i++){
        let tmp = [];
        grp.push(tmp)
    }
    let count = 1
    // let checker = [];
    for ( var i = 0 ; i < leave.length ; i++){ // 1000
        let out = leave[i]
        // 처음 나가는놈
        let order = enter.indexOf(out)
        // 나가는 놈 앞에놈을 찾아라
        let counter = []
        let maxOrder = -1;
        for (let j = 0 ; j <= order ; j++ ){ 
       
            // enter배열에서 0부터 j 까지의 애들 전부 서로 만난건데 어떻게 처리해주지
            //나중에 나갔는데 먼저 들어간경우는 무조건 만난거
            //여기서 멈춰야하네
            // 1000번째 원소라고 치면, 1~ 1000까지 돌고
            // 두번째가 999번째 원소면 1~ 999까지 돌고
            // 이렇게 반복되는데 계속 불필요한 계산이 존재하니까
            // 비효율적으로나오네
            // 이걸 어떻게 줄여야할까
            // 더 줄일수가 있나 이게?
            
            
            for (let k = 0 ; k <= order ; k++){
                //반복계산이 너무 많다
                // 생각해보면 앞에놈들 전부 반복문 돌릴텐데
                // 이미 돌렸던 애들도 돌아가니까 문제가 됨
                //그래서 k를 enter[k]에서 돌릴 때 나가는놈보다 더 앞에있으면 지워야하는데
                // 지워버리면 인덱스가 바뀌니까 값이 또 바뀌어버림
                // 그러면 모아놨다가 한번에 지워야겠네
                
                if ( ~grp[enter[j]-1].indexOf(enter[k])){//이미 들어있으면 무시
                    continue
                }
                
                grp[enter[j]-1].push(enter[k])
           
            }
        }
        enter.splice(order,1)
        // checker.push(out) // out체커
        //splice를 하지 않고는 처리 못하나?
    }

    for ( let i = 0 ; i < grp.length ; i++){
        answer.push(grp[i].length -1)
    }
    return answer;
}
