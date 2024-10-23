function solution(arr, k) {
    var answer = [];
    let count = 0;
    for(let num of arr){
        if(!answer.includes(num)){
            answer.push(num);
            count++;
        }
        if(count == k){
            break;
        }
    }
    if(count < k){
        for(let i = 0;i<k-count;i++){
            answer.push(-1);
        }
    }
    return answer;
}