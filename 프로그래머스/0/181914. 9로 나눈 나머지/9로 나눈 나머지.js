function solution(number) {
    var answer = 0;
    const num = number.split("").reduce((acc,val)=> {
       return acc + parseInt(val)
    },0)
    answer = num % 9;
    return answer;
    
}
//각자리 숫자의 합 % 9 이거 하라는거네