function solution(n, control) {
    var answer = 0;
    let cal = control.split("").reduce((acc, value)=> {
        if(value == "w"){
            acc += 1;
            }else if(value == "s"){
                acc -= 1;
            }else if(value == "d"){
                acc += 10;
            }else{
                acc -= 10;
            }
        return acc;
    },n)
    answer = cal;
    return answer;
}