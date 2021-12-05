// 2018 KAKAO BLIND RECRUITMENT :: n진수 게임

function solution(n, t, m, p) {
    let answer = '';
    let cvt = '' 
    //길이가 t*m이되면 그만 이어붙인다
    let num = 0
    while (true){
        let convert = num.toString(n)
        cvt += convert
        num += 1
        if(cvt.length >= t*m){
            break
        }
    }
    let plg = false
    while (true){

        for(let i =0 ; i < cvt.length ; i++){
            if( ((i%m) + 1) === p){
                answer += cvt[i]
                if( answer.length === t){
                    plg = true
                    break
                }
            }
        }
        if(plg){
            break
        }
    }
    answer = answer.toUpperCase()
    return answer;
}
