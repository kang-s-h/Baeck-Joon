function solution(n) {
    var answer = 0;
    let i = 1;
    while( n % i !== 1){
        i++;
        answer = i;
        
    }
    return answer;
}