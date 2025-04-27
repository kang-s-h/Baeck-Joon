function solution(board, moves) {
    var answer = 0;
    let len = board[0].length;
    const stack = [];
    
    moves.forEach((num)=> {
        for(let i = 0;i<len;i++){
            if(board[i][num-1] !== 0){
                stack.push(board[i][num-1]);
                board[i][num-1] = 0;
                break;
            }
        }
        if(stack.length >= 2 && (stack[stack.length-1] === stack[stack.length-2])){
            stack.pop();
            stack.pop();
            answer +=2;
        }
    })
    
    return answer;
}