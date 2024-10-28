function solution(my_string, letter) {
    var answer = '';
    const arr = my_string.split("").filter((word)=> word != letter);
    answer = arr.join("");
    return answer;
}