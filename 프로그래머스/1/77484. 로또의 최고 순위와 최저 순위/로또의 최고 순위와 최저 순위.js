function solution(lottos, win_nums) {
    var answer = [];
    let countZero = lottos.filter((num)=> num === 0).length;
    let countSame = lottos.filter((num)=> win_nums.includes(num)).length;
    
    let best = countSame+countZero === 0 ? 6 :7 - (countSame+countZero);
    let worst = countSame === 0 ? 6 : 7 - countSame;
    
    answer.push(best,worst);
    
    return answer;
}