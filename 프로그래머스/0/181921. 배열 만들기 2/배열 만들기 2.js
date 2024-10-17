function solution(l, r) {
    var answer = [];
    for(let i = l ;i <= r; i++){
        if ([...String(i)].every(num => num === '5' || num === '0')) {
            answer.push(i);
        }
    }
    if(answer.length === 0){
    answer.push(-1);
    }

    return answer;
}
