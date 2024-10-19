function solution(my_strings, parts) {
    var answer = '';
        my_strings.filter((word,index)=> {
            let idx = parts[index];
            answer += word.slice(idx[0],idx[1]+1);
        })
    return answer;
}
//