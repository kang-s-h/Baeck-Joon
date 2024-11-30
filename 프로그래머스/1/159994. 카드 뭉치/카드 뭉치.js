function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    goal.forEach((word)=> {
        if(cards1.includes(word)){
            cards1.indexOf(word) == 0 ? cards1.shift() : answer = "No";
        }else{
            cards2.indexOf(word) == 0 ? cards2.shift() : answer = "No";
        }
    })
    
    return answer;
}
//stack goal 돌리면서 있는ㄴ 배열 찾고 idx 0인거 확인하고 shift하고 