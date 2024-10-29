function solution(n) {
    var answer = 0;
    let acc = 1;
    let x = 1;
    while(acc <= n){
        acc = acc * x;
        x ++;
        answer ++;
    }
    return answer-1;
}