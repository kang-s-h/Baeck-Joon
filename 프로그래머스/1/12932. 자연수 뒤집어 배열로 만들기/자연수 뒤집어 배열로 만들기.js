function solution(n) {
    var answer = [];
    answer = String(n).split("");
    return answer.reverse().map(Number);
}