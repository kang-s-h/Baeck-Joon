function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a,b)=> a - b);
    let count = 0;
    arr.forEach((num)=> {
        count +=num;
        if(count <= budget){
            answer++;
            console.log(answer);
        }
    })
    
    return answer;
}