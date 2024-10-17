function solution(n) {
    var answer = [];
    do {
        answer.push(n);
        if(n % 2 == 0){
            n /= 2;
        }else{
             n = n * 3 + 1;
        }
    }
    while(n !== 1)
    answer.push(1);
    return answer;
}

//x가 짝수 => 나누기 2  // 홀수일 때 3*x+1 
//계속 반복 => 반드시 x가 1이 되는ㅈ ㅣ