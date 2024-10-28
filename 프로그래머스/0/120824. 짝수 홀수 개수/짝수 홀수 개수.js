function solution(num_list) {
    var answer = [];
    let res1 = 0;
    let res2 = 0;
    num_list.forEach((num)=> {
        if(num % 2 ==0){
            res1 ++;
        }else{
            res2 ++;
        }
    })
    answer.push(res1,res2);
    return answer;
}