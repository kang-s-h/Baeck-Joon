function solution(my_string) {
    var answer = [];
    answer = my_string.split(" ").filter((str)=> {
        if(str !== ""){
            return str;
        }
    })
    return answer;
}