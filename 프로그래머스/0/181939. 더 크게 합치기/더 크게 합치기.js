function solution(a, b) {
    var answer = 0;
    num1 = Number(String(a)+String(b));
    num2 = Number(String(b)+String(a));
    const check = [num1,num2].sort((a,b)=> {return b - a})
    answer = check[0];
    return answer;
}