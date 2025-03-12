function solution(s) {
    var answer = 0;
    let char = s[0];
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === char) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            answer++;
            
            if (i + 1 < s.length) {
                char = s[i + 1];
            }
        }
    }

    if (count !== 0) {
        answer++;
    }

    return answer;
}
