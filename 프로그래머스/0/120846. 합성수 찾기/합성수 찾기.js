function solution(n) {
    var answer = 0;
    for(let j = 0;j<=n;j++){
        for(let i = 1;i<=j;i++){
            if(i !== 1 && i !== j && j % i == 0){
                answer ++;
                break;
            }
        }
    }
    
    return answer;
}