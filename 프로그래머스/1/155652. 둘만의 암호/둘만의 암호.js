function solution(s, skip, index) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    let skipArr = skip.split("");
    let setArr = alphabet.filter(str => !skipArr.includes(str));
    
    let answer = s.split("").map((word) => {
        let num = (setArr.indexOf(word) + index) % setArr.length;
        return setArr[num];
    });

    return answer.join("");
}
