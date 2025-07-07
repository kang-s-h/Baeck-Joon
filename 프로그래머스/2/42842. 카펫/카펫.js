function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 1;i<=Math.sqrt(yellow);i++){
        if(yellow % i === 0){
            const a = (yellow / i) + 1;
            const b = i + 1;
            
            if((a + b)*2 === brown){
                a >= b ? answer.push(a+1,b+1) : answer.push(b+1,a+1);
                return answer;
            }
        }
    }
    
    return answer;
}