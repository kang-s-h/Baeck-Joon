function solution(n, k) {
    var answer = [];
    let array = [];
    for(let i = 1;i<=n;i++){
        array.push(i);
    }
    array.map((num)=> {
        if(num % k == 0){
            answer.push(num);
        }
    })
    return answer;
}