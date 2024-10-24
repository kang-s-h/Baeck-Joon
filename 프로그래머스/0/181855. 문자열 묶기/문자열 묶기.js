function solution(strArr) {
    var answer = 0;
    let arr = [];
    for(let i = 0;i<strArr.length;i++){
        arr.push(0);
    }
    strArr.forEach((str)=> {
       arr[str.length - 1] +=1;
    });
    answer = arr.sort((a,b)=> b-a)[0];
    return answer;
}