// 프로그래머스 :: 폰켓몬
function solution(nums) {
    var answer = 0;
    let list = new Set(nums)
    list = [...list]
    let result = nums.length/2
    let lenList = list.length
    if( lenList === result ){
        answer = lenList
    }
    else if( lenList > result){
        answer = result
    }else{
        answer = lenList
    }
    return answer;
}
