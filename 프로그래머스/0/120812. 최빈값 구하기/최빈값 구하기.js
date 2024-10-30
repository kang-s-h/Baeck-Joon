function solution(array) {
    var answer = 0;
    let obj = {};
    array.forEach((num)=> {
        obj[num] = (obj[num] ||0) +1;
    })
    
    let setArr = Object.values(obj);
    const max = Math.max(...setArr);
    const li = setArr.lastIndexOf(max);
    
    let key;
    for(const k in obj){
        if(obj[k] === max){
            key = k;
            break;
        }
    }
    
    if(setArr.indexOf(max) !== li && li != -1){
        answer = -1;
    }else{
        answer = +key;
    }
    return answer;
}