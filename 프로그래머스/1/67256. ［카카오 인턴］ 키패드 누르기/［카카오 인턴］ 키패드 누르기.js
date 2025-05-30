function solution(numbers, hand) {
    var answer = '';
    
    let left = [0,3];
    let right = [2,3];
    
    const cal = (currentLoc,pushLoc) => {
        return Math.abs(currentLoc[0] - pushLoc[0]) + Math.abs(currentLoc[1] - pushLoc[1])
    }
    
    const calX = (num) => {
        if(num == 0){
            return 1;
        }
        
        if(num % 3 !== 0){
            return num%3 -1; 
        }
        
        return 2;
        }
    
    numbers.forEach((num)=> {
        let x = calX(num);
        let y = num !== 0 ? (Math.ceil(num/3)-1) : 3;
        
         let number = [x,y];
        
        if(number[0] === 0){
            left = number;
            answer+= "L";
        }else if(number[0] === 2){
            right = number;
            answer +="R";
        }else{
            let calLeft = cal(left,number);
            let calRight = cal(right,number);
            
            if(calLeft === calRight){

                if(hand === "right"){
                    right = number;
                    answer+= "R";
                }else{
                    left = number;
                    answer+= "L";
                }
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