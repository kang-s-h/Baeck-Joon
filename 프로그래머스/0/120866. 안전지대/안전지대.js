function solution(board) {
    var answer = 0;
    
    const dx = [-1,0,1,1,1,0,-1,-1];
    const dy = [1,1,1,0,-1,-1,-1,0];
    const len = board.length;
    
    for(let i= 0;i<len;i++){
        for(let j=0;j<len;j++){
            if(board[i][j] == 1){
                board[i][j] = 2;
            
            
            for(let k = 0;k<8;k++){
                let x = i + dx[k];
                let y = j + dy[k];
                
                if((0 <= x && x < len ) &&(0 <= y && y < len ) && (board[x][y] != 1)){
                    board[x][y] = 2;
                }   
            }
        }
    }
}
    for(let i= 0;i<len;i++){
        for(let j=0;j<len;j++){
            if(board[i][j] == 0){
                answer++;
            }
        }
    }    
    return answer;
}