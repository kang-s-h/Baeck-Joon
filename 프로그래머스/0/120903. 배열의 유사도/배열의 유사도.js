function solution(s1, s2) {
    var answer = 0;
    s1.forEach((word)=> {
        if(s2.includes(word)){
            answer++;
        }
    })
    return answer;
}