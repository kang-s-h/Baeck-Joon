function solution(n) {
    var answer = [];
    let arr = [];
    for(let j = 0;j<n;j++){
        arr.push(0);
    }
        for(let i = 0;i<n;i++){
            answer.push(arr.map((num,index)=> {
                if(index == i){
                    return num = 1;
                }else{
                    return num = 0;
                }
            }))
        }
    
    return answer;
}