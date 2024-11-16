function solution(lines) {
    var answer = 0;
    let obj = {};
    
    for(let i=0;i<3;i++){
        for(let j =0;j<lines[i].at(-1)-lines[i][0];j++){
            obj[j + lines[i][0]] = (obj[j + lines[i][0]] || 0) + 1;
        }
    }
    for (let key in obj){
        console.log(`Key: ${key}, Value: ${obj[key]}`)
        if(obj[key] > 1){
            answer++;
            console.log(obj[key]);
        }
    }

    return answer;
}