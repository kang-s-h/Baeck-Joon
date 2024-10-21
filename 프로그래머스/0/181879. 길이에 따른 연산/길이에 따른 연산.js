function solution(num_list) {
    var answer = 0;
    if(11 <= num_list.length){
        num_list.forEach((num)=> {
                answer +=num;
            })
    }else{
        answer = 1;
        num_list.forEach((num)=> {
                answer *=num;
            })
    }
    return answer;
}