function solution(arr) {
    var answer = [];
    if(arr.indexOf(2) == arr.lastIndexOf(2) && arr.includes(2)){
        answer.push(2);
    }else if(!arr.includes(2)){
        answer.push(-1);
    }else{
       const array = arr.slice(arr.indexOf(2),arr.lastIndexOf(2)+1);
        answer = array;
    }
    return answer;
}