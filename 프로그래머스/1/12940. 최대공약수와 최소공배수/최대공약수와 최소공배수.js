function solution(n, m) {
    var answer = [];
    let min_num = Math.min(n,m);
    let gcd = 0;
    
    for(let i = 1;i<=min_num;i++){
        if(n % i == 0 && m % i == 0){
            gcd = i;
        }
    }
    let lcm = n * m / gcd;
    answer.push(gcd,lcm);
    return answer;
}