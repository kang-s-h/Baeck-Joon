function solution(n) {
    var answer = 0;
    
    const standardNum = n.toString(2).split("0").join("").length;
    
    let i = n;
    let checkOneNum;
    while(standardNum !== checkOneNum){
        i++;
        checkOneNum = i.toString(2).split("0").join("").length;
    }
    
    answer = i;
    return answer;
}