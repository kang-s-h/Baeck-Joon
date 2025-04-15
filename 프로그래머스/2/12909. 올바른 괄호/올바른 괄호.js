function solution(s){
    var answer = true;
    let stack = [];
    
    s.split("").forEach((str)=> {
        if(str === ")" && stack[stack.length - 1] === "("){
            stack.pop();
        }else{
            stack.push(str);
        }
    })
    
    if(stack.length !== 0){
        answer = false;
    }

    return answer;
}