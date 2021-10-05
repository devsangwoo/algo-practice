//프로그래머스 :: 소수 만들기

function solution(nums) {
    var answer = 0;
    let lst = Array.from({length: 3000}, () => true);
    for( let i = 2  ; i <= 3000; i++){
        for(let j = 2 ; i*j <= 3000 ; j++){
            if (lst[i] == true){
                lst[i*j] = false
            }
        }
    }
    for( let i = 0; i < nums.length-2 ; i++){
        for( let j = i +1 ; j < nums.length-1 ; j++){
            for(let k = j + 1 ; k < nums.length ; k++){
                if( lst[nums[i] + nums[j] + nums[k]] === true ){
                    answer += 1
                    
                }
            }
        }
    }
    
    return answer;
}
