function solution(board) {
//     var answer = 0;
//     let arr = [];
//     let array = board.flat();
//     array.forEach((num,index)=> {
//         if(num == 1){
//             arr.push(index);
//         }
//     })
//     console.log(arr);
//     let setArr = [1,-1];
//     let len = board[0].length;
//     setArr.push(len+1,len,len-1,-(len+1),-len,-(len-1));
    
//     for(let i = 0;i<arr.length;i++){
//         setArr.forEach((num)=> {
//             if(array[arr[i]-num] !== undefined){
//                     array[arr[i]-num] = 1;
//             }
//         })
//     }
//     array.forEach((num)=> {
//         if(num == 0){
//             answer++;
//         }
//     })
//     return answer;
    
    var dy = [-1, -1, -1, 0, 0, 1, 1, 1]
    var dx = [-1, 0, 1, -1, 1, -1, 0, 1]
    var len = board.length;
    var solution = 0;
    
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (board[i][j] == 1) {
                board[i][j] = -1
                
                for (var k = 0; k < 8; k++) {
                    var y = i + dy[k];
                    var x = j + dx[k];
                    
                    if ((0 <= y && y <= len - 1 ) && (0 <= x && x <= len - 1) && (board[y][x] != 1)) {
                        board[y][x] = -1
                    }
                }
            }
        }
    }
    
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (board[i][j] == -1) continue;
            
            solution++;
        }
    }
    
    return solution;
}

//한줄로 생각하고 t면 t+1 t-1 t+4,5,6 t-4,5,6
//만약에 0이면 2로 
