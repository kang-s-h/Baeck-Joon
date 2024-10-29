function solution(i, j, k) {
    var answer = 0;
    let arr = [];
    for(let t = i;t<=j;t++){
        arr.push(t);
    }
    arr.join("").split("").forEach((num)=> {
        if(+num == k){
            answer ++;
        }
    })
    return answer;
}