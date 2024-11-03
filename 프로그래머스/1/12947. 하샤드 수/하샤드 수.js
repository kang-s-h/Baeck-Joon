function solution(x) {
    var answer = true;
    let num1 = String(x);
    let num2 = 0;
    for(let i = 0 ;i<num1.length;i++){
        num2 += +num1[i];
    }
    if(x % num2 !== 0 ){
        answer = false;
    }
    return answer;
}