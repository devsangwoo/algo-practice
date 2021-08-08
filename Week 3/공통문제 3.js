function solution(s) {
    var answer = 0;
    var numberToString = ""
    var stringToNumber = ""
    function findNumber(num){
        if(num === "zero"){
            return "0"
        }else if(num ==="one"){
            return 1
        }else if(num ==="two"){
            return 2
        }else if(num ==="three"){
            return 3
        }else if(num ==="four"){
            return 4
        }else if(num ==="five"){
            return 5
        }else if(num ==="six"){
            return 6
        }else if(num ==="seven"){
            return 7
        }else if(num ==="eight"){
            return 8
        }else if(num ==="nine"){
            return 9
        }else{
            return false
        }
    }
    for (var i =0 ; i < s.length ; i++){
        if(Number.isInteger(parseInt(s[i]))){
            numberToString += s[i]
        }else{
            stringToNumber += s[i]
        }
        if(findNumber(stringToNumber)){
            numberToString += findNumber(stringToNumber)            
            stringToNumber = ""
        }
    }
    answer = parseInt(numberToString)
    return answer;
}
