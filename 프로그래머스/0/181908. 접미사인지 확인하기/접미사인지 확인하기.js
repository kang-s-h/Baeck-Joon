function solution(my_string, is_suffix) {
    var answer = 0;
    let array = [];
    let num = my_string.length;
    for(let i = 0;i<num;i++){
        let text = my_string.slice(i);
        array.push(text);
    }
    answer = array.includes(is_suffix) ? 1 : 0;
    return answer;
}