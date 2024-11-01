function solution(n) {
       let answer = [];
    
    while (n % 2 === 0) {
        answer.push(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        answer.push(n);
    }

    return [...new Set(answer)];
}