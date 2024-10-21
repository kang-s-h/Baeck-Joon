function solution(strArr) {
    var answer = [];
    strArr.map((str,index)=> {
        if(index % 2 == 0){
            answer.push(str.toLowerCase());  
            
        }else{
            answer.push(str.toUpperCase());
        }
    })
    return answer;
}