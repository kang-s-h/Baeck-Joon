function solution(n) {
    var answer = 0;
    answer = n <= 7 ? 1 : Math.ceil(n / 7);
    return answer;
}