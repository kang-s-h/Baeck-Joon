function solution(numbers, hand) {
    var answer = '';
    
    let left = [0,3];
    let right = [2,3];
    
    const cal = (currentLoc,pushLoc) => {
        return Math.abs(currentLoc[0] - pushLoc[0]) + Math.abs(currentLoc[1] - pushLoc[1])
    }
    
    numbers.forEach((num)=> {
        let x = num !== 0 ? (num % 3 !== 0 ? num%3 : 3) - 1 : 1;
        let y = num !== 0 ? Math.ceil(num/3)-1 : 3;
        
         let number = [x,y];
         let numberStr = number.join("");
        
        if((numberStr === "00") || (numberStr === "01") || (numberStr === "02")){
            left = number;
            answer+= "L";
        }else if((numberStr === "20") || (numberStr === "21") || (numberStr === "22"))         {
            right = number;
            answer +="R";
        }else{
            let calLeft = cal(left,number);
            let calRight = cal(right,number);
            
            if(calLeft === calRight){
                hand === "right" ? right = number : left = number;
                hand === "right" ? answer += "R" : answer += "L";
            }else if(calLeft > calRight){
                right = number;
                answer+= "R";
            }else{
                left = number;
                answer += "L";
            }
        }
        
    })
    
    return answer;
}