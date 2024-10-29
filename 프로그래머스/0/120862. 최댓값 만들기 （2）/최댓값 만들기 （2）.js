function solution(numbers) {
    var answer = 0;
   const arr = numbers.map((num,index)=> {
        return numbers.map((num2,index2)=> {
            if(index !== index2){
                return num * num2;
            }
        });
    });   
       answer = arr.flat().sort((a,b)=> b - a)[0];
    
    return answer;
}