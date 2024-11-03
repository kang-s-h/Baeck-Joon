function solution(arr) {
    var answer = [];
    let array = [...arr];
    const last = array.sort((a,b)=> b - a).pop();
    if(arr.length > 1){
        arr.forEach((num)=> {
        if(num !== last){
            answer.push(num);
        }
    })
    }else{
        answer.push(-1);
    }
    return answer;
}