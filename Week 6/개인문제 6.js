    
function solution(word) {
    var answer = 0;
    var dic = ["A","E","I","O","U"]
    var dicWord = ["A","E","I","O","U"]
    for (var i = 0 ; i < 5 ; i++){
        for (var j = 0 ; j < 5 ; j++){
            for (var k = 0 ; k < dicWord.length ; k++){
                let newWord = dicWord[k] + dic[j]
                if( newWord.length <= 5){
                    dicWord.push(newWord)
                }
            }
        }
    }
    dicWord.sort()
    const tmp = new Set(dicWord)
    const uniqueDic = [...tmp]
    answer = uniqueDic.indexOf(word) + 1
    return answer;
}
