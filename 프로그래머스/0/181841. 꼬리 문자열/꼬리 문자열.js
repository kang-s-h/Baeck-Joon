function solution(str_list, ex) {
    var answer = '';
    const arr = str_list.filter((str)=> {
        return !str.includes(ex);
    })
    answer = arr.join("");
    return answer;
}