function solution(myString, pat) {
    var answer = '';
    let l = pat.length;
    answer = myString.slice(0,myString.lastIndexOf(pat) + l);
    return answer;
}