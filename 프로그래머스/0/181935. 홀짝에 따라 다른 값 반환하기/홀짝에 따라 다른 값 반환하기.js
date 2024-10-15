function solution(n) {
    var answer = 0;
    if(n % 2 == 0){

        for(let i = 1; i<= n / 2;i++){
            answer += (i*2)**2;
        }
    }else{
        for(let j = 0; j < (n / 2) ; j++){
            answer += 2*j + 1;
        }
    }
    
    return answer;
}