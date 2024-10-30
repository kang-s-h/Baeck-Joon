function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let up = numer1 * denom2 + numer2 * denom1;
    let down = denom1 * denom2;
    let head = up;
    let foot = down;
    
    while(foot !== 0){
        let remain = head % foot;
        head = foot;
        foot = remain;
        
    }
    
    answer.push(up / head,down / head);
    return answer;
    
}