function solution(n) {
    var answer = [];
    for(let i = 1;i<=n;i++){
        let k = parseInt(n / i);
        if(k * i == n){
            answer.push(i);
        }
    }
    return answer;
}