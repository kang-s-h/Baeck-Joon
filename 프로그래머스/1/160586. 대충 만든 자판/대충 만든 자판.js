function solution(keymap, targets) {
    var answer = [];
    let keyObject = {};
    let count = 0;
    
    keymap.forEach((str)=> {
        str.split("").forEach((word,index)=> {
             keyObject[word] = keyObject[word] 
                ? Math.min(keyObject[word], index + 1) 
                : index + 1;
            
        })
    })
    
    for (const target of targets) {
        let count = 0;

        for (const char of target) {
            if (keyObject[char] === undefined) {
                count = -1;
                break;
            }
            count += keyObject[char];
        }

        answer.push(count);
    }
    return answer;
}