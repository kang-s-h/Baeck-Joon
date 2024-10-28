function solution(rsp) {
    var answer = '';
    answer = rsp.split("").map((num)=> {
        if(num == 2){
            return num = 0;
        }else if( num == 0){
            return num = 5;
        }else{
            return num = 2;
        }
    }).join("");
    return answer;
}