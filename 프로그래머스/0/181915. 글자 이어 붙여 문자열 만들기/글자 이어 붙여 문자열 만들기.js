function solution(my_string, index_list) {
    var answer = '';
    const str = my_string.split("");
    index_list.filter((ele)=> {
        answer += str[ele];
    })
    return answer;
}