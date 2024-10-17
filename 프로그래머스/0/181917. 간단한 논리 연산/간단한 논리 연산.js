function solution(x1, x2, x3, x4) {
    var answer = true;
    const cal = (a,b)=> a == true || b == true ? true : false;
    answer = cal(x1,x2) == true && cal(x3,x4) == true ? true : false;
    return answer;
}