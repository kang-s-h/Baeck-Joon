function solution(k, m, score) {
    var answer = 0;
    let countBox = Math.floor(score.length / m );
    const setArr = score.sort((a,b)=> b - a);
    
    for(let i = 0;i<countBox;i++){
        let arr = setArr.slice(i*m,(i+1)*m);
        answer += Math.min(...arr) * m;
    }
    
    return answer;
}

//한 상자의 가격 : 가장 낮은 가격p * 갯수m