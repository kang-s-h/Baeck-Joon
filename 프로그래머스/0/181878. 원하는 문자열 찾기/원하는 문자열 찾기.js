function solution(myString, pat) {
    var answer = 0;
    let str = myString.toLowerCase();
    let pat2 = pat.toLowerCase();
    if(str.includes(pat2)){
        answer = 1;    
    }
    return answer;
}