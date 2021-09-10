//프로그래머스 : 2021 - Dev-Matching : 웹 백엔드 개발자(상반기)
//행렬 테두리 회전하기

function solution(rows, columns, queries) {
    var answer = [];
    //시작부터 시계방향으로 인덱스 받아서 배열에 저장하기
    //(x1,y1) (x2,y2)이면, 

    var grp = []
    for ( let i = 0 ; i < rows ; i++){
        let tmp = []
        for (let j = 0 ; j < columns ; j++){
            tmp.push(i* columns + j + 1)
        }
        grp.push(tmp)
    }
    
    queries.forEach(ele => {
        var lotate = []
        var minimum = 110000
        let x1 = ele[0]-1
        let y1 = ele[1]-1
        let x2 = ele[2]-1
        let y2 = ele[3]-1
        // 1. 시작위치인 [x1][y1] 저장 
        // 2. 시작위치에 마지막인 [x1+1][y1] 대입
        // 3. x축을 따라서 이동, 
        // 4. 반복
        let curY = 0
        let curX = 0
        var tmp = grp[x1][y1]// 처음꺼
        grp[x1][y1] = grp[x1+1][y1]
        lotate.push(tmp)
        for(let dy = y1 +1 ; dy <= y2 ; dy++){
            [grp[x1][dy], tmp] = [tmp, grp[x1][dy]]
            lotate.push(tmp)
            curY = dy
        }
        for(let dx = x1+1 ; dx <= x2 ; dx++){
            [grp[dx][curY],tmp] = [tmp, grp[dx][curY]]
            lotate.push(tmp)
            curX = dx
        }
        for(let dy = y2-1 ; dy >= y1 ; dy--){
            [grp[curX][dy], tmp] = [tmp, grp[curX][dy]]
            lotate.push(tmp)
            curY = dy
        }
        for(let dx = x2-1 ; dx > x1 ; dx--){
            [grp[dx][curY], tmp] = [tmp, grp[dx][curY]]
            lotate.push(tmp)
        }
        answer.push(Math.min(...lotate))
    })
    
    return answer;
}
