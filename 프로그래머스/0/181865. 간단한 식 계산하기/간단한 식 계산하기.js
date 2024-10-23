function solution(binomial) {
    var answer = 0;
    let [a,b,c] = binomial.split(" ");
    a = parseInt(a);
    c = parseInt(c);
    switch(b){
        case "+":
            answer = a + c;
            break;
        case "-":
            answer = a - c;
            break;
        case "*":
            answer = a * c;
            break;
    }
    return answer;
}
