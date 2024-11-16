function solution(a, b) {
    var answer = 1;
    let head = a;
    let foot = b;
    while(foot !== 0){
        let remain = head % foot;
        head = foot;
        foot = remain;
    }
    
    let c = b / head;
    while (c % 2 === 0) {
        c /= 2;
    }
    while (c % 5 === 0) {
        c /= 5;
    }
    
    if (c !== 1) {
        answer = 2;
    }
    
    return answer;
}
