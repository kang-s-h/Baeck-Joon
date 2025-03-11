function solution(N, stages) {
    var answer = [];
    let userArr = [...stages];
    let pairArr = [];
    for(let i = 1; i<= N; i++){
        let remainUser = userArr.length;
        userArr = userArr.filter((stage)=> stage !== i);
        let passUser = userArr.length;
        
        console.log(remainUser, passUser);
        pairArr.push([i, (remainUser - passUser)/ remainUser]);
        
        
        
    }
        pairArr.sort((a,b)=> b[1] - a[1]);
        console.log(pairArr);
        pairArr.forEach(([a,b])=> answer.push(a));
    return answer;
}