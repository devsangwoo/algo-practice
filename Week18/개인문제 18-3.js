//프로그래머스 :: 점프와 순간이동
function solution(n)
{
    //2진수로 바꾸고 1의개수
    
    var ans = 0;
    n = n.toString(2)
    for(let i = 0 ; i < n.length ; i++){
        if( n[i] == 1){
            ans += 1
        }
    }
    return ans;
}
