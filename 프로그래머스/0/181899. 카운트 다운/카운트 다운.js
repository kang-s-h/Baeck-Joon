function solution(start_num, end_num) {
    var answer = [];
    let array = [];
    for(let i = 0;i<=start_num;i++){
        array.push(i);
    }
    answer = array.slice(end_num,start_num+1).reverse();
    return answer;
}