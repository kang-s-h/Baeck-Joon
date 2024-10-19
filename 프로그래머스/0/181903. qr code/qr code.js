function solution(q, r, code) {
    var answer = '';
    let array = code.split("");
    array.forEach((word,index)=> {
        if(index % q == r){
            answer += word;
        }
    })
    return answer;
}