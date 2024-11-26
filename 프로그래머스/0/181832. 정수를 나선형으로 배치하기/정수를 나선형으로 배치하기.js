function solution(n) {
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
     let setArr = [];
    
    for(let i = 0;i<n;i++){
        setArr.push(Array(n).fill(0));
    }
    
    let row = 0, col = 0, count = 0;

    for (let i = 1; i <= n ** 2; i++) {
        setArr[row][col] = i; 
        const nextRow = row + direction[count][0];
        const nextCol = col + direction[count][1];

        // 다음 위치가 경계를 벗어나거나 이미 채워진 경우, 방향 전환
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || setArr[nextRow][nextCol] !== 0) {
            count = (count + 1) % 4; // 방향 전환
        }

        // 새로운 방향으로 이동
        row += direction[count][0];
        col += direction[count][1];
    }

    return setArr;
}

