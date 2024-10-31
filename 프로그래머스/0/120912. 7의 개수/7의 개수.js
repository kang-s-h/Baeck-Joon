function solution(array) {
    var answer = 0;
    array.join("").split("").forEach((num)=> {
        if(num == "7"){
            answer ++;
        }
    })
    return answer;
}