function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((num)=> {
        
        if(answer <= n){
            answer += num;
        }
        
    })
    return answer;
}