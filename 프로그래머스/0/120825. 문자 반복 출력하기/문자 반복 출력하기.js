function solution(my_string, n) {
    var answer = '';
    const arr = my_string.split("").map((word)=> {
        return word.repeat(n);
    })
    answer = arr.join("");
    return answer;
}