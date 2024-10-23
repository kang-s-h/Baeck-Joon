function solution(arr1, arr2) {
    var answer = 0;
    const a = arr1.length;
    const b = arr2.length;
    if(a !== b){
      answer =  a > b ? 1 : -1;
    }else{
        const c = arr1.reduce((acc,cur) => acc + cur);
        const d = arr2.reduce((acc,cur) => acc + cur);
        if(c == d){
            answer = 0;
        }else{
           answer = c > d ? 1: -1;
        }
    }
    return answer;
}