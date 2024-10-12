function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    const setArray = [...my_string];
    const newArray = setArray.splice(s,overwrite_string.length,overwrite_string);
    answer = (setArray.join(""));
    return answer;
}