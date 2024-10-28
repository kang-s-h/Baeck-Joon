function solution(my_string, num1, num2) {
    var answer = '';
    let str = my_string.split("");
    str.splice(num1,1,my_string[num2]);
    str.splice(num2,1,my_string[num1]);
    answer = str.join("");
    return answer;
}