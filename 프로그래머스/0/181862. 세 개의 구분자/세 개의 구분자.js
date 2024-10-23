function solution(myStr) {
    var answer = [];
    let string = "";
    for(let str of myStr){
        if(str == "a" || str == "b" ||str == "c"){
           string +=" ";
        }else{
            string +=str;
        }
    }
    answer = string.split(" ").filter((item)=> item.length !== 0)
    if(answer.length === 0){
        answer.push("EMPTY");
    }
    return answer;
}