function solution(my_string) {
    var answer = 0;
    const arr = my_string.split("").map((num)=> {
        if(isNaN(num)){
            return num = " ";
        }else{
            return num;
        }
    })
    arr.join("").split(" ").forEach((num)=> {
        answer += +num;
    })
    return answer;
}