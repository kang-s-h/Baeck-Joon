function solution(a, b, n) {
    var answer = 0;
    let remain = n;
    
    while (remain >= a){
        let count = b * Math.floor(remain / a);
        let rest = remain % a;

        answer += count;
        remain = count + rest;
    }
    
    return answer;
}