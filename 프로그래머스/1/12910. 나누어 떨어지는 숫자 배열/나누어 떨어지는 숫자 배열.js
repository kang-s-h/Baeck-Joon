function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter((num)=> {
       return num % divisor == 0;
    });
    if(answer.length == 0){
        answer.push(-1);
    }
    return answer.sort((a,b)=> a - b);
}