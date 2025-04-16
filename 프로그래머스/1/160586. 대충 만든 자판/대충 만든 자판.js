function solution(keymap, targets) {
    var answer = [];
    let keyObject = {};
    let count = 0;
    
    keymap.forEach((str)=> {
        str.split("").forEach((word,index)=> {
            const isExist = Object.keys(keyObject).includes(word);
            
            if(isExist){
                if (keyObject[word] > index + 1) {
                    keyObject[word] = index + 1;
                }
            }else{
                keyObject[word] = index + 1;
            }
            
        })
    })
    
    for(let i = 0;i<targets.length;i++){
        for(let j = 0;j<targets[i].length;j++){
            if(keyObject[targets[i][j]] === undefined){
                count = -1;
                break;
            }else{
                count += keyObject[targets[i][j]];
            }
        }
        
        answer.push(count);
        count = 0;
    }
    return answer;
}