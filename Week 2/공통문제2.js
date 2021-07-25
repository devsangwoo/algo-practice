function solution(s) {

    function getSortedArr(array){
        const counts = array.reduce((pv, cv) => {
            pv[cv] = (pv[cv] || 0) + 1;
            return pv;
        }, {});
   
        const result = [];
        for(let key in counts){
            result.push([key, counts[key]]);
        }
        
        result.sort((first,second) => {
            return second[1] - first[1];
        }) 
        
        return result;
    }
    
    var answer = [];
    
    var newString = s.replace(/{/g, "");
    newString = newString.replace(/}/g,"");
    var newArray = newString.split(',')
    var intArray = newArray.map((ele) => (parseInt(ele)))
    var sorted = getSortedArr(intArray)
    for(var i = 0 ; i < sorted.length ; i++){
        answer.push(parseInt(sorted[i][0]))
    }
    
    return answer;
}