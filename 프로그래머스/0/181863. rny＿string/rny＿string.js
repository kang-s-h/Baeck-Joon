function solution(rny_string) {
    var answer = '';
    let array = [];
    array = rny_string.split("").map((str)=> {
        if(str == "m"){
            return str = "rn";
        }else{
            return str;
        }
    })
    answer = array.join("");
    return answer;
}