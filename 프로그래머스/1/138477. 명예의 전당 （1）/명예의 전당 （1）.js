function solution(k, score) {
    var answer = [];
    let arr = [];
    score.forEach((num)=> {
        if(arr.length <= k-1){
            arr.push(num);
            let end1 = arr.sort((a,b)=> b-a).at(-1);
            
            answer.push(end1);
        }else{
            arr.push(num);
            arr.sort((a,b)=> b-a).pop();
            let end2 = arr.at(-1);
            
            answer.push(end2);
        }
    })
    
    return answer;
}
