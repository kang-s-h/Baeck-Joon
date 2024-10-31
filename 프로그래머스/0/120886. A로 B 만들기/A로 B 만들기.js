function solution(before, after) {
    var answer = 1;
    let obj = {};
    let obj2 = {};
    before.split("").forEach((word)=> {
        obj[word] = (obj[word] || 0) +1;
    })
    after.split("").forEach((word)=> {
        obj2[word] = (obj2[word] || 0) +1;
    })
    
    Object.keys(obj).forEach((key)=> {
        if(obj[key] !== obj2[key]){
            answer = 0;
        }
    })
    
    return answer;
}