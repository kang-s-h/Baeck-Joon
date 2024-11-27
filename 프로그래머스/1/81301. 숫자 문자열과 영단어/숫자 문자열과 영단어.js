function solution(s) {
    var answer = 0;
    const numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let string = s;
    //console.log(a.indexOf('one')); 
    //indexof() + str.length
    
    for(let i = 0;i<s.length;i++){
        for(let j= 0;j<numberWords.length;j++){
            if(string.includes(numberWords[j])){
                let idx = string.indexOf(numberWords[j]);
                string = string.slice(0,idx) +String(j)+string.slice(idx+numberWords[j].length);
            }
        }
    }
    answer = Number(string);
    return answer;
}

//