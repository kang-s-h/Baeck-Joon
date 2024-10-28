function solution(numbers, direction) {
    var answer = [];
    if(direction == "right"){
        answer = numbers;
        const res = answer.pop();
        answer.unshift(res);
    }else{
        answer = numbers.slice(1,numbers.length);
        answer.push(numbers[0]);
    }
    return answer;
}