// 2018 KAKAO BLIND RECRUTMENT :: 다트 게임

function solution(dartResult) {
    var answer = 0;
    let stack = []
    dartResult = dartResult.split('')
    let grade = 'SDT';
    let option = '*#';
    while(dartResult.length != 0){
        let tmp = dartResult.shift()
        if( !isNaN(tmp)){
            if(tmp == 1 && dartResult[0] == 0){
                stack.push(10)
                dartResult.shift()
            }else{
                stack.push(parseInt(tmp))
            }    
        }else{
            let cal = 0
            if( ~grade.indexOf(tmp)){
                
                if(tmp === 'S'){
                    stack.push(stack.pop())
                }else if(tmp === 'D'){
                    stack.push(stack.pop()**2)
                }else if (tmp === 'T'){
                    stack.push(stack.pop()**3)
                }
            }else if(~option.indexOf(tmp)){
                if( tmp === '*'){
                    if(stack.length === 1){
                        stack.push(stack.pop()*2)
                    }
                    else{
                        let a = stack.pop()*2
                        let b = stack.pop()*2
                        stack.push(b)
                        stack.push(a)
                    }
                }else if(tmp === '#'){
                    stack.push(stack.pop()*(-1))
                }
            }
        }
        
    }
    const reducer = (acc, cur) => acc + cur;
    answer = stack.reduce(reducer)

    return answer;
    
}
