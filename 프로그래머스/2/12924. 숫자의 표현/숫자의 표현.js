function solution(n) {
    var answer = 1;
    
    if(n === 0){
        return 0;
    }
    
    for(let i = 2 ;i*(i-1)/2<n ;i++){
        const firstNum =  (2*n - i*(i-1)) / (2*i);
        if(Number.isInteger(firstNum) && firstNum > 0){
            answer++;
        }
    }
    
    return answer;
}