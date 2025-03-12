function solution(dartResult) {
    var answer = 0;
    let score = [];
    let setArr = dartResult.match(/\d+[SDT]+\D?/g);
    
    for(let i = 0;i< 3;i++){
        let cul = 0
        let number = +setArr[i].match(/\d*/);
        
        if(setArr[i].includes("S")){
            cul += number;
            console.log("S");
        }else if(setArr[i].includes("D")){
            cul += number**2;
            console.log("D");
        }else{
            cul += number**3;
            console.log("T");
        }

        if(setArr[i].includes("*")){
            cul *= 2;
            if(i>0) score[i-1] *= 2;
        }else if(setArr[i].includes("#")){
            cul *= -1;
        }
            
        score.push(cul);
    }
        
        answer = score.reduce((acc,cur)=> acc + cur,0);
        
    return answer;
}