function solution(score) {
    var answer = Array(score.length).fill(1);
    let arr = [];
    score.forEach((num)=> {
        arr.push((num[0]+num[1])/2);
    })
    for(let i = 0;i<score.length-1;i++){  // 0  1  2
        for(let j = i+1;j<=score.length;j++){//1 2 3  2 3 3
            if(arr[i] < arr[j]){
                answer[i]++;
            }else if(arr[i] > arr[j]){
                answer[j]++;
            }
        }
    }
    console.log(arr);
    return answer;
}