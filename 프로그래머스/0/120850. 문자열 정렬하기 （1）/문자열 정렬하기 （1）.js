function solution(my_string) {
    var answer = [];
    answer = my_string.split("").filter((num)=> !isNaN(num)).map(Number);
    return answer.sort((a,b)=> a - b);
}