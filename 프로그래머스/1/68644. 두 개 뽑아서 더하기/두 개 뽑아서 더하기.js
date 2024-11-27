function solution(numbers) {
    var answer = [];
    let len = numbers.length;
    for(let i = 0;i<len-1;i++){
        for(let j = i+1;j<len;j++){
            let num = numbers[i] + numbers[j];
            if(!answer.includes(num)){
                answer.push(num);
            }
        }
    }
    
    return answer.sort((a,b)=> a-b);
}

// 반복 더하고 set 하던 if 로 막던 