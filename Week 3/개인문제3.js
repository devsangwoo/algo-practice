function solution(price, money, count) {
    var answer = -1;
    var totalPrice = 0;
    for(var i = 1 ; i <= count ; i++){
        totalPrice += price*i
    }
    answer = totalPrice-money <= 0 ? 0 : totalPrice-money
    
    return answer;
}
