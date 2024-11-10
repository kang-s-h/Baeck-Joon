function solution(n) {
    var answer = 0;
    let num = 1;
    for(let i = 1;i<=n;i++){
        while(num %3 ==0 || String(num).includes("3")){
            answer++;
            num++;
        }
        answer++;
        num++;
    }
    return answer;
}