function solution(s) {
    var answer = '';
    let num = s.length / 2;
    
    answer = s.length % 2 !== 0 ? s[parseInt(num)] :s[num-1]+s[num];
    return answer;
}