function solution(numLog) {
    var answer = '';
    numLog.forEach((num,index,array)=> {
        let setNum = array[index + 1] - num;
        if(index !== numLog.length - 1){
            if(setNum == 1){
            answer += "w";
        }else if(setNum == -1){
            answer += "s";
        }else if(setNum == 10){
            answer += "d";
        }else{
            answer += "a";
        }

        }
    })
    
    return answer;
}