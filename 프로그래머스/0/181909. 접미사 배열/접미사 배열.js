function solution(my_string) {
    var answer = [];
    let num = my_string.length;
    for(let i = 0; i< num ;i++){
        let text = my_string.slice(i);
        answer.push(text);
    }
    
    return answer.sort();
}