function solution(numbers, hand) {
    var answer = '';
    var curLeft = "*";
    var curRight = "*";
    var leftOnly = [1,4,7]
    var rightOnly = [3,6,9]
    function pushHandler(start, end){
        if(start === 3 || start === 1){
            if(end===2){
                return 1
            }else if(end === 5){
                return 2
            }else if(end === 8){
                return 3
            }else if(end === 0){
                return 4
            }
        }else if (start === 6 || start === 4){
            if(end === 2){
                return 2
            }else if( end===5){
                return 1
            }else if( end === 8){
                return 2
            }else if(end === 0){
                return 3
            }
        }else if(start === 9 || start === 7){
            if(end === 2){
                return 3
            }else if( end===5){
                return 2
            }else if( end === 8){
                return 1
            }else if(end === 0){
                return 2
            }
        }else if(start==="#" || start === "*"){
            if(end === 2){
                return 4
            }else if( end===5){
                return 3
            }else if( end === 8){
                return 2
            }else if(end === 0){
                return 1
            }
        }else if(start === 2){
            if(end === 2){
                return 0
            }else if(end === 5){
                return 1
            }else if(end === 8){
                return 2
            }else if(end === 0){
                return 3
            }
        }else if(start === 5){
            if(end === 2){
                return 1
            }else if(end === 5){
                return 0
            }else if(end === 8){
                return 1
            }else if(end === 0){
                return 2
            }
        }else if(start === 8){
            if(end === 2){
                return 2
            }else if(end === 5){
                return 1
            }else if(end === 8){
                return 0
            }else if(end === 0){
                return 1
            }
        }else if(start === 0){
            if(end === 2){
                return 3
            }else if(end === 5){
                return 2
            }else if(end === 8){
                return 1
            }else if(end === 0){
                return 0
            }
        }
    }
    
    for (var i = 0 ; i < numbers.length ; i++){
        if( numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7 ){
            answer += "L"
            curLeft = numbers[i]
        }else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
            answer += "R"
            curRight = numbers[i]
        }else{
            if( hand == "right"){
                if (pushHandler(curLeft, numbers[i]) === pushHandler(curRight, numbers[i])){
                    answer += "R"
                    curRight = numbers[i]
                }else if (pushHandler(curLeft, numbers[i]) > pushHandler(curRight, numbers[i])){
                    answer += "R"
                    curRight = numbers[i]
                }else if(pushHandler(curLeft, numbers[i]) < pushHandler(curRight, numbers[i])){
                    answer += "L"
                    curLeft = numbers[i]
                }
            }else{
                if (pushHandler(curLeft, numbers[i]) === pushHandler(curRight, numbers[i])){
                    answer += "L"
                    curLeft = numbers[i]
                }else if (pushHandler(curLeft, numbers[i]) > pushHandler(curRight, numbers[i])){
                    answer += "R"
                    curRight = numbers[i]
                }else if(pushHandler(curLeft, numbers[i]) < pushHandler(curRight, numbers[i])){
                    answer += "L"
                    curLeft = numbers[i]
                }
            }
        }
    }
    
    return answer;
}