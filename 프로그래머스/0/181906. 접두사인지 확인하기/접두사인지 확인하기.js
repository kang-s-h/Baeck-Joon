function solution(my_string, is_prefix) {
    var answer = 0;
    let array = [];
    let num = my_string.length;
    for(let i = 0;i<num;i++){
        let text = my_string.slice(0,i+1);
        array.push(text);
    }
    answer = array.includes(is_prefix) ? 1 : 0;
    return answer;
}