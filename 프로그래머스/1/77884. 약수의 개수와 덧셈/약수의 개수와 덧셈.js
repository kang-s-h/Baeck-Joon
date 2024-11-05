function solution(left, right) {
    var answer = 0;
    let array = [];
    let count = 0;
    for(let i = left;i<=right;i++){
        array.push(i);
    }
    array.forEach((num)=> {
        for(let j = 1;j<=Math.sqrt(num);j++){
            if(num % j == 0 && num != j**2){
                count+=2;
            }else if(num % j == 0 && num == j**2){
                count+=1;
            }
            console.log(num,j,count)
        }
        if(count % 2 == 0){
            answer += num;
        }else{
            answer -= num;
        }
        count = 0;
    })
    return answer;
}