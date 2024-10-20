function solution(num_list) {
    var answer = 0;
    let num1 = 0;
    let num2 = 0;
    num_list.forEach((num,index)=> {
        if(index % 2 == 0){
            num1 += num;
            }else{
                num2 += num;
            }
    })
    answer = num1 > num2 ? num1 : num2;
    
    return answer;
}