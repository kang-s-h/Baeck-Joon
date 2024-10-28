function solution(my_string) {
    var answer = '';
    const alp = ["a","e","o","i","u"];
    const arr = my_string.split("").filter((num)=> {
        return !alp.includes(num);
    })
    answer = arr.join("");
    return answer;
}