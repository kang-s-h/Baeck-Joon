function solution(s) {
    var answer = '';
    let arr = s.split("").filter((word)=> {
       return s.indexOf(word) == s.lastIndexOf(word)
    })
    answer = arr.sort().join("");
    return answer;
}