//프로그래머스 2017 팁스타운 :: 짝지어 제거하기


function solution(s)
{
    var answer = -1;
    var stack = [];
    
    for( let i = 0 ; i < s.length ; i++){
        if (stack.length === 0){
            stack.push(s[i])
        }else{
            if(stack[stack.length-1] === s[i]){
                stack.pop()
            }
            else{
                stack.push(s[i])
            }
        }

    }
    if( stack.length === 0){
        answer = 1
    }else{
        answer = 0
    }
    return answer;
}
