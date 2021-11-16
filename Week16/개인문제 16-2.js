//프로그래머스 :: 스킬트리

function solution(skill, skill_trees) {
   var answer = skill_trees.length;
    
    skill = skill.split('')
    skill_trees.forEach((ele)=> {
        ele = ele.split('')
        let skillTmp = skill.slice()
        for(let i =0 ; i < ele.length ; i++){
            if(skillTmp.indexOf(ele[i]) === 0){
                skillTmp.shift()
            }else if(skillTmp.indexOf(ele[i]) === -1){
                continue
            }else{
                answer-= 1
                break
            }
        }
    })
 
    
    return answer;
}
