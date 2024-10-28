function solution(array) {
    var answer = 0;
    answer = array.sort((a,b)=>a-b)[parseInt(array.length / 2)];
    return answer;
}