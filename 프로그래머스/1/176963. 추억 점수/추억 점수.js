function solution(name, yearning, photo) {
    var answer = [];
    
    const obj = {};
    name.forEach((name,idx)=> {
        obj[name] = yearning[idx];
    })
    photo.forEach((arr)=> {
        let score = 0;
        arr.forEach((name)=> {
           if(name in obj){
               score += obj[name];
           }
       })
        answer.push(score);
    })
    return answer;
}
//객체 문제다 