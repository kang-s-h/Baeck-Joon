function solution(n, k) {
    var answer = 0;
    let si = 0;
    if(10<=n){
        si = parseInt(n / 10);
    }
    answer = 12000 * n + 2000 * (k - si);
    return answer;
}