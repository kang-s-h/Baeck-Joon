function solution(myString) {
    var answer = '';
    const arr = myString.split("").map((num)=> {
        if("l".charCodeAt() > num.charCodeAt()){
            return num = "l";
        }else{
            return num;
        }
    })
    answer = arr.join("");
    return answer;
}
//97 122