// 프로그래머스 :: 구명보트
function solution(people, limit) {
    // sort + two pointer
    var answer = 0;
    people = people.sort((a,b) => a-b)
    // 투포인터
    let start = 0
    let end = people.length -1
    while ( start <= end){
        if(start === end){
            answer += 1
            break;
        }
        if( people[start] + people[end] <= limit){
            // 두명 갈 수 있는 경우
            answer += 1
            start += 1
            end -= 1
        }else{
            // 한명밖에 못가는 경우
            answer += 1
            end -= 1
        }
    }
    return answer;
}
