function solution(n) {
    var answer = 0;
    
    let a = n.toString(3);
    let b = a.split("").reverse().join("");
    answer = parseInt(b,3);
    
    return answer;
}