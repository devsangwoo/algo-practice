//프로그래머스 :: 행렬의 곱셈
function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length ; i++){
            let tmpArray = []
        for(let j = 0 ; j < arr2[0].length ; j++){
            let num = 0
            for(let k = 0 ; k < arr2.length ; k++){
                num += arr1[i][k]*arr2[k][j]
            }
            tmpArray.push(num)
            
        }
            answer.push(tmpArray)
    }
    return answer;
}
