function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 1;i<=Math.sqrt(yellow);i++){
        if(yellow % i === 0){
            const a = (yellow / i) + 2;
            const b = i + 2;
            
            if( a * b === brown + yellow) return [a,b];
        }
    }
    
    return answer;
}