function solution(answers) {
    var answer = [];
    let obj = {
        1 : 0,
        2 : 0,
        3 : 0,
    };
    const array = [[1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
                 [2, 1, 2, 3, 2, 4, 2, 5],
                 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];    
    
    for(let i = 0;i< 3;i++){
        let count = 0;
        for(let j = 0;j<answers.length;j++){
            if(array[i][count] == answers[j]){
                obj[i+1]+= 1;
            }
            if(i == 1){
                count = (count+1) % 8;
            }else{
                count = (count + 1) % 10;
            }
        }
    }
    const max = Math.max(...Object.values(obj));
    for(let key in obj){
        if(obj[key] == max){
            answer.push(+key);
        }
    }
    console.log(obj);
    return answer.sort((a,b)=> a-b);
}