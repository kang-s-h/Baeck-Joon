function solution(price, money, count) {
    var answer = 0;
    let pri = 0;
    for(let i = 1;i<=count;i++){
        pri += price * i;
        console.log(pri);
    }
    if(money - pri < 0 ){
        answer = pri-money;
    }
    
    return answer;
}