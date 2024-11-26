function solution(n) {
    var answer = [];
    const direction = [[0,1],[1,0],[0,-1],[-1,0]];
    let row = 0,col = 0;
    answer = Array.from({length : n},()=> Array(n).fill(0));
    
    let count = 0;
    
    for(let i=1;i<=n**2;i++){
        answer[row][col] = i;
        
        let nextRow = row + direction[count][0];
        let nextCol = col + direction[count][1];
        
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || answer[nextRow][nextCol] !== 0) {
            count = (count + 1) % 4;
        }
        row += direction[count][0];
        col += direction[count][1];
    }
    
    
    return answer;
}

    
    //일단 현재 위치에 숫자 넣고 
    //다음 이동했을 때 넘어가는지 확인 하기 
    //너멍가면 바꾸기 
    //반복 