function solution(age) {
    var answer = '';
    const arr = String(age).split("").map((char)=> {
        return String.fromCharCode(+char +97);
    })
    answer = arr.join("");
    return answer;
}

//소문자 97 ~ 122