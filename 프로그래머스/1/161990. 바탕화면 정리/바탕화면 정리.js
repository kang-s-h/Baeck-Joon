function solution(wallpaper) {
    var answer = [];    

    const wallpaperArr  = [];
    const xArr = [];
    const yArr = [];
    
    const findMax = (arr) => {
        return Math.max(...arr) + 1;
    }
    
    const findMin = (arr) => {
        return Math.min(...arr);
    }
    
    
    wallpaper.forEach((items,rowIndex)=> {
        items.split("").forEach((item,columnIndex)=> {
            if(item === "#"){
                wallpaperArr.push([rowIndex,columnIndex]);
            }
        })
    })
    
    wallpaperArr.forEach((arr)=> {
        xArr.push(arr[0]);
        yArr.push(arr[1]);
    })
    
    const xMax = findMax(xArr);
    const xMin = findMin(xArr);
    const yMax = findMax(yArr);
    const yMin = findMin(yArr);
    
    answer.push(xMin,yMin,xMax,yMax);
    
    
    
    return answer;
}

    //빈칸은 .  파일은 #이다 
    //드래그 하면 파일 선택 가능하고 선택 파일 삭제 가능 
    //최소 이동거리 한번의 드래그로 모든 파일 선택 해 지우려고함 
    