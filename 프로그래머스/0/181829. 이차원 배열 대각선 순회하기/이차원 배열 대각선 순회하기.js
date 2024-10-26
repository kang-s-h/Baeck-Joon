function solution(board, k) {
    var answer = 0;
    board.forEach((num1,index)=> {
        num1.forEach((_,index2)=> {
            if(index + index2 <= k){
                answer += board[index][index2];
            }
        })
    })
    return answer;
}