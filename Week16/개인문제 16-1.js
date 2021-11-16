// 프로그래머스 :: 멀쩡한 사각형
function solution(w, h) {
    var answer = 1;
    let getGCD = ( w, h ) => (h > 0 ? getGCD(h, w % h) : w);
    let GCD = getGCD(w,h)
    let unfit = (Math.floor(w/GCD) + Math.floor(h/GCD) - 1)*GCD
    answer = w*h - unfit
    
    return answer;
}
