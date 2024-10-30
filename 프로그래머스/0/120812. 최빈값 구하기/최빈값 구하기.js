function solution(array) {
    var answer = 0;
    let obj = {};
    array.forEach((num)=> {
        obj[num] = (obj[num] ||0) +1;
    })
    
    let setArr = Object.values(obj);
    const max = Math.max(...setArr);
    
     if (setArr.indexOf(max) !== setArr.lastIndexOf(max)) {
        return -1;
    }

    answer = +Object.keys(obj).find(key => obj[key] === max);
    return answer;
}