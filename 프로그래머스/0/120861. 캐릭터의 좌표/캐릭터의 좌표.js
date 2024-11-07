function solution(keyinput, board) {
    var answer = [0,0];
    let a = (board[1]-1)/2;
    let b = -(board[1]-1)/2;
    keyinput.forEach((dic)=> {
        switch (dic){
        case "up":
            if(answer[1]!=(board[1]-1)/2){
                answer[1] ++;
            }
            break;
        case "down":
            if(answer[1]!=-(board[1]-1)/2){
                answer[1] --;
            }
            break;
        case "left":
            if(answer[0]!=-(board[0]-1)/2){
                answer[0] --;
            }    
            break;
        case "right":
             if(answer[0]!=(board[0]-1)/2){
                answer[0] ++;
            }   
            break;
    }
    })
    console.log(answer);
    for(let i=0;i<2;i++){
       if(answer[i] < 0 && answer[i] < -(board[i]-1)/2){
           answer[i] = -(board[i]-1)/2;
       }else if(answer[i] >= 0 && answer[i] > (board[i]-1)/2){
           answer[i] = (board[i]-1)/2;
       }
           
    }
    return answer;
}