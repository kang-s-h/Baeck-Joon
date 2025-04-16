function solution(s) {
    var answer = [];
    
    let lowerStr = s.toLowerCase();

    
    answer = lowerStr.split(" ").map((str)=> {
        if(str.length !== 0){
            return str[0].toUpperCase() + str.slice(1,str.length);
        }else{
            return str;
        }
    }).join(" ");
    
    return answer;
}