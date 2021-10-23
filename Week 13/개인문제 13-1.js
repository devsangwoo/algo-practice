//프로그래머스 :: N개의 최소공배수

function solution(arr) {
    var answer = 0;
    arr.sort((a,b) => a-b)
    let num = arr[arr.length-1]
    for( let i = 1 ; i < 1000000 ; i++){
        let check = false
        for ( let j = 0 ; j < arr.length ; j++){
            let ele = arr[j]
            if( num*i % ele != 0 ){
                //안 나누어 떨어지는경우
                break
            }
            if ( j === arr.length -1){
                check = true   
            }
        }
        if(check){
            answer = num*i
            break
        }
    
    }
    return answer;
}
