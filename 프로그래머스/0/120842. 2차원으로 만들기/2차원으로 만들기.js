function solution(num_list, n) {
    var answer = [];
    let array = [];
    for(let i=0;i<num_list.length;i+=n){
        for(let j=0;j<n;j++){
            array.push(num_list[j+i]);
        }
        answer.push(array);
        array = [];
    }
    return answer;
}