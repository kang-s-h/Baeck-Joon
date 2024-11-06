function solution(sides) {
    var answer = 0;
    const side = sides[0] + sides[1];
    for(let i = 0;i<side;i++){
        let max = Math.max(sides[0],sides[1],i);
        if(side + i - max > max){
            answer++;
        }
    }
    return answer;
}