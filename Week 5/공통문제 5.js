// 현재 위치가 P일때만 검사하기
// 상하좌우가 O인경우에 그쪽 인덱스로 이동해서 상하좌우 P count가 2 이상이면 false
// X인경우는 넘어가기
// P일때 상하좌우가 P인경우도 false

function solution(places) {
    var answer = [];

    function checkGrp(grp){
        let dx = [1,-1,0,0]
        let dy = [0,0,1,-1]
        for (var i = 0 ; i < 5 ; i++){
            for (var j = 0 ; j < 5 ; j++){
                if(grp[i][j] == "P"){

                    for (var k = 0 ; k < 4 ; k++){
                        let a = i + dx[k]
                        let b = j + dy[k]
                        if (a < 0 || a >= 5 || b < 0 || b >= 5){
                            continue
                        }
                        if (grp[a][b] == "O"){
                            //상하좌우에 O가 있다
                            var pCount = 0
                            for (var l = 0 ; l < 4 ; l++){
                                let n = a + dx[l]
                                let m = b + dy[l]
                                if (n < 0 || n >= 5 || m < 0 || m >= 5){
                                    continue
                                }
                                if( grp[n][m] == "P" ){
                                    pCount += 1
                                    if(pCount >= 2){
                                        return false
                                    }
                                }
                            }
                        }
                        else if (grp[a][b] == "P"){
                            return false
                        }
                    }
                }
            }
        }
        return true
    }
    places.forEach(ele => {
        if(checkGrp(ele)){
            answer.push(1)
        }else{
            answer.push(0)
        }
    })
    return answer;
}
