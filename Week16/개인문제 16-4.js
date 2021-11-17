//프로그래머스 :: 영어 끝말잇기
function solution(n, words) {
    var answer = [];
    let lst = [];
    
    let num = 0;
    let turn = 0;
    lst.push(words[0])
    for( let i = 1 ; i < words.length ; i++){
        // ( i % n )+1 = 몇번 사람인지
        // ( i / n )+1 = 몇번째 순서인지
        if( ~lst.indexOf(words[i])){
            //이미 가지고있으면 무조건 탈락임
            num = (i % n) + 1
            turn = Math.floor((i/n)+1)
            break
        }else{
            //없는경우
            if( lst[lst.length-1][lst[lst.length-1].length -1] != words[i][0] ){
                num = (i % n) + 1
                turn = Math.floor((i/n)+1)
                break
            }
            lst.push(words[i])
        }
    }
    answer = [num,turn]
    return answer;
}
