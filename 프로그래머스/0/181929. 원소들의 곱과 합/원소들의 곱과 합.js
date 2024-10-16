function solution(num_list) {
    var answer = 0;
    let num1 = 1;
    let num2 = 0;
    num_list.map((num) => {
    num1 *= num;
    num2 += num;
    })
    if(num1 < (num2)**2){
        answer = 1;
    }
    
    return answer;
}