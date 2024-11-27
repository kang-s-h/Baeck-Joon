function solution(strings, n) {
    var answer = [];
    let arr = [];
    
    strings.forEach((word)=>{
        arr.push(word[n]);
    })
    arr.sort().forEach((str)=> {
        let setArr = [];
        for(let i = 0;i<strings.length;i++){
            if(strings[i][n] == str && !answer.includes(strings[i])){
                setArr.push(strings[i]);
                console.log(strings[i]);
            }
        }
        console.log(setArr.sort());
        answer.push(...setArr.sort());
        console.log(answer);
        
    })
    return answer;
}