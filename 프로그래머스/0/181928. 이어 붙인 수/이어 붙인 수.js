function solution(num_list) {
    var answer = 0;
    let num1 ="";
    let num2 ="";
    num_list.map((num)=> {
        if(num % 2 == 0){
            num1+= num;
        }else{
            num2 += num;
        }
    })
        answer = parseInt(num1) + parseInt(num2);
    return answer;
}