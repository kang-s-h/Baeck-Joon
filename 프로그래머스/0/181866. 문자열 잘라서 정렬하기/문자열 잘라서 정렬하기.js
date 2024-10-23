function solution(myString) {
    var answer = [];
    myString.split("x").forEach((str)=> {
        if(str !== ""){
            answer.push(str);
        }
    });
    return answer.sort();
}