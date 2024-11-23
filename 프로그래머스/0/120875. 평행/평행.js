function solution(dots) {
    var answer = 0;
    const len = dots.length;
    
    let arr = [];
    
    for(let i = 0;i<len-1;i++){
        for(let j = i+1;j<len;j++){
            let x = dots[j][0];
            let y = dots[j][1];
            
            let inclination = (y - dots[i][1]) / (x - dots[i][0]);
            arr.push(inclination);
        }
    }
    console.log(arr);
    const obj = {};
    arr.forEach((num)=> {
        obj[num] = (obj[num] || 0) + 1;
    }
    )
    let valueArr = Object.values(obj);
    console.log(valueArr);
    if(!valueArr.includes(3) && valueArr.length != 6){
        answer = 1;
    }
    return answer;
}
//정상이면 4개,6개 아니면 3개,0개.. 
//2211 6  / 3111 111111