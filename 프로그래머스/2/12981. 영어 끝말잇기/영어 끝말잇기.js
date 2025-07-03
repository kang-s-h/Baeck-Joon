function solution(n, words) {
    var answer = [0,0];
    let count = 0;
    
    for(let i = 1;i<words.length;i++){
        
        if(words[i-1][words[i-1].length-1] !== words[i][0]){
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        for(let j = 0;j<i;j++){
            if(words[j] === words[i]){
                return [(i % n) + 1, Math.floor(i / n) + 1];
            }
        }
    }

    return answer;
}