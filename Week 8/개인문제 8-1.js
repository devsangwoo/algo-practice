//프로그래머스 :: 2018 KAKAO BLIND RECRUITMENT [1차] 뉴스 클러스터링


function wordSplice(str){
    
    let wordArray = []
    let isAlpha = /[a-z]{2}/
    for( let i = 1 ; i < str.length ; i++){
        let word = (str[i-1] + str[i]).toLowerCase()
        if(isAlpha.test(word)){
            wordArray.push( word )
        }
    }
    return wordArray;
}

function solution(str1, str2) {
    var answer = 0;
    str1 = wordSplice(str1)
    str2 = wordSplice(str2)
    
    let strSet = new Set([...str1, ...str2])
    let lastList = Array.from(strSet)
    
    let intersection = []
    let union = []
    lastList.forEach(ele => {
        let countStr1 = str1.filter(item => ele === item).length
        let countStr2 = str2.filter(item => ele === item).length
        let many = Math.max(countStr1, countStr2)
        for (let i = 0 ; i < many ; i++){
            union.push(ele)
        }
        let aLittle = Math.min(countStr1, countStr2)
        for (let i = 0 ; i < aLittle ; i++){
            intersection.push(ele)
        }
    })
    if( union.length === 0 && intersection.length === 0){
        answer = 1*65536
    }else{
        
    answer = parseInt((intersection.length/union.length)*65536)
    
    }
    return answer;
}
