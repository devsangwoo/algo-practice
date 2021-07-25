function solution(priorities, location) {
    var answer = 0;
    var hash = priorities.map((ele, idx) => [ele,idx])
    
    priorities.sort(function(a, b)  {
        return b - a;
    });
    
    var maxValue = priorities.shift();
    while(true){
        var tmp = hash.shift();
        if(tmp[0] === maxValue){//첫번째 요소가 가장 높은 우선순위냐?
            if(tmp[1] === location){//가장 높은 우선순위인데, location도 같음?
                answer += 1;
                return answer//그러면 반환해 그게 답임
            }else{//아니면 가장 높은 우선순위인데, location이 다름? 
                //그러면 일단 뽑아
                answer += 1
                //그러고 최대값 갱신해줘
                maxValue = priorities.shift();
            }
        }else{//첫 요소가 가장 높은 우선순위가 아님?
            //그러면 뒤에 가져다 붙여 그냥
            hash.push(tmp)
        }
    }
    return answer;
}