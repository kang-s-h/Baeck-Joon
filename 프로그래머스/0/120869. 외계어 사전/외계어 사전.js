function solution(spell, dic) {
    var answer = 2;
    let arr = [];
    dic.forEach((str)=> {
        let count = 0;
        spell.forEach((word)=> {
            if(str.includes(word)){
                count++;
            }
            if(count == spell.length){
                answer = 1;
            }
        })
    })
    
    return answer;
}