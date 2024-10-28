function solution(n, t) {
    var answer = 0;
    let num = n;
    for(let i = 0;i<t;i++){
        num = num * 2;
    }
    answer = num;
    return answer;
}