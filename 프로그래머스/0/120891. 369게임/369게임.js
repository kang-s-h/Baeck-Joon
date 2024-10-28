function solution(order) {
    var answer = 0;
    String(order).split("").forEach((num)=> {
        if(num != 0 && num % 3 == 0){
            answer ++;
        }
    })
    return answer;
}