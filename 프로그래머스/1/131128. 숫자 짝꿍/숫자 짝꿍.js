function solution(X, Y) {
    var answer = '';
    let XArr = Array(10).fill(0);
    let YArr = Array(10).fill(0);
    let setArr = [];
    
    
    for(let i = 0;i< Y.length;i++){
        YArr[(Y[i])]++;
    }
    
    for(let i = 0;i< X.length;i++){
        XArr[(X[i])]++;
    }
    
    for(let i = 0;i<10;i++){
        XArr[i] >= YArr[i] ? setArr.push(YArr[i]) : setArr.push(XArr[i]);
    }
    
    if(setArr.every((zero)=> zero === 0)){
        answer = "-1";
    }else if(setArr[0] !== 0 && setArr.slice(1,10).every((zero)=> zero === 0)){
        answer = "0";
    }else{
        for(let i = 9;i>=0;i--){
            for(let j = 0;j<setArr[i];j++){
                answer += String(i);
            }
        }
    }

    return answer;
}