function solution(before, after) {
    var answer = 0;
    let a = before.split("").sort().join("");
    let b = after.split("").sort().join("");
    if(a == b){
        answer = 1;
    }
    
    return answer;
}