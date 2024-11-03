function solution(num) {
    var answer = 0;
    let num1 = num;
    while(num1 !== 1){
        if(num1 % 2 == 0){
            num1 = num1 / 2;
        }else{
            num1 = num1*3 +1;
        }
        answer ++;
    }
    if(answer == 1){
        answer = 0;
    }else if(answer >500){
        answer = -1;
    }
    return answer;
}