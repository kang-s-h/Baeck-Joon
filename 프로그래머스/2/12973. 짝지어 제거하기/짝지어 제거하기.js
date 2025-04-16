function solution(s)
{
    var answer = 0;
    let stack = [];
    
    s.split("").forEach((alphabet)=> {
        if(alphabet !== stack[stack.length - 1]){
            stack.push(alphabet);
        }else{
            stack.pop();
        }
    })
    
    if(stack.length === 0){
        answer = 1;
    }

    return answer;
}