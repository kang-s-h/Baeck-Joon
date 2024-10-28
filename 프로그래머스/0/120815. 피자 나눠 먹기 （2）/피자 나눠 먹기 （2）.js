function solution(n) {
    var answer = 1;
    let ps = 6;
    while(ps % n !== 0){
        ps = ps + 6;
        answer ++;
    }
    return answer;
}