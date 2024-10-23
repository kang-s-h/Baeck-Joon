function solution(myString) {
    var answer = [];
    myString.split("x").forEach((num)=> {
        answer.push(num.length);
    })
    return answer;
}