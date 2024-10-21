function solution(myString, pat) {
    var answer = 0;
    let index = 0;
    while (index !== -1) {
    index = myString.indexOf(pat, index); 
    if (index !== -1) { 
        answer++;  
        index += 1;  
    }
}
    return answer;
}