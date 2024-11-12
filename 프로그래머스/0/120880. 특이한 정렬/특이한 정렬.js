function solution(numlist, n) {
    var answer = [];
    let arr = numlist.map((num)=> {
        return num - n;
    })
    arr.sort((a,b)=> Math.abs(a) - Math.abs(b))
    
    for(let i = 0;i<numlist.length-1;i++){
        if(Math.abs(arr[i]) == Math.abs(arr[i+1]) && arr[i] < arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    arr.forEach((num)=> {
        answer.push(num + n);
    })
    return answer;
}