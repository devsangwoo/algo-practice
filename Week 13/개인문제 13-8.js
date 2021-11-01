// 2018 KAKAO BLIND ::: 비밀지도
function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0 ; i < n ; i++){
        let calOr = arr1[i] | arr2[i]
        let binary = calOr.toString(2)
        let tmp = ""
        if (binary.length != n){
            for( let k = 0 ; k < n-binary.length+1 ; k++){
                binary = "0" + binary    
            }
            
        }
        for(let j = 0 ; j < n ; j++){
            if( binary[j] === "1" ){
                tmp += '#'
            }else{
                tmp += ' '
            }
        }
        answer.push(tmp)
    }
    return answer;
}
