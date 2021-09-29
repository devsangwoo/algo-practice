//2021 KAKAO BLIND RECRUITMENT :: 

// 효율성 fail 09/29

function solution(table, query) {
    var answer = [];
    // 0 : 언어, 2 : 직군, 4: 경력, 6: 소울푸드 7:점수
    // 각 쿼리마다
    for( let i = 0 ; i < query.length ; i++){
        let ele = query[i].split(' ')
    // 배열 5개 생성
        let arr = Array.from({length: table.length}, (v, i) => i); 
        let lan = [];
        let job = [];
        let career = [];
        let food = [];
        let grade = [];
    // 언어가 겹치는거 찾고 배열에 추가
    // 여기서 for문 나눠서, 반복문 제일 처음 한번 돌고
    // 그 다음부터는 그 반복문에 대해서 있으면 넣고
    // 어차피 순차적으로 도니까
        
        //언어에 대한 테이블 인덱스 먼저 찾아주고
        if(ele[0] == "-"){
            lan = arr
        }else{
            arr.forEach(item => {
                if(~table[item].indexOf(ele[0])){
                    lan.push(item)
                }
            })
        }
        //여기서부터는 언어에 대해 돌면서, push
        if( ele[2] == "-"){
            job = lan
        }
        else{
            lan.forEach(item => {
                // item은 첫 조건이 만족된 테이블의 인덱스
                if( ~table[item].indexOf(ele[2])){
                    job.push(item)
                }
            })
        }
        
        //여기서부터는 job에 대해서 돌면서 push
        if( ele[4] == "-"){
            career = job
        }else{
            job.forEach(item => {
                if( ~table[item].indexOf(ele[4])){
                    career.push(item)
                }
            })
        }
        
       //여기서부터는 carrer까지 만족한거에 대해 돌면서
        if( ele[6] == "-"){
            food = career
        }else{
            career.forEach(item => {
                if( ~table[item].indexOf(ele[6])){
                    food.push(item)
                }
            })
        }
        //여기서는 food까지 만족한거에 대해 돌면서
        if( ele[7] == "-"){
            grade = food
        }else{
            food.forEach(item => {
                if( parseInt(ele[7]) <= parseInt(table[item].replace(/[^0-9]/g,'')) ){
                    grade.push(item)
                }
            })
        }
        
        //여기까지 왔으면 grade배열의 개수가 통과된 개수
        answer.push(grade.length)
    }
    return answer;
}

