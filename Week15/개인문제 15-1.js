// 위클리 챌린지 : 최소직사각형
function solution(sizes) {
    // 가장 큰 순으로 정렬
    let maxi = 0
    let mini = 0
    for(let i = 0 ; i < sizes.length ; i++){
        sizes[i][0] > sizes[i][1] ? [[sizes[i][0],sizes[i][1]]] = [[ sizes[i][1],sizes[i][0]]] : null
        sizes[i][1] > maxi ? maxi = sizes[i][1] : null
        sizes[i][0] > mini ? mini = sizes[i][0] : null
    }
    var answer = maxi*mini;
    return answer;
}
