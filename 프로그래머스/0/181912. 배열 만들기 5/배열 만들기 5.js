function solution(intStrs, k, s, l) {
    var answer = [];
        intStrs.map((num)=> {
            if(parseInt(num.slice(s,s+l)) > k ){
                answer.push(parseInt(num.slice(s,s+l)));
            }
                
        })
    return answer;
}

//slice(s,s+l+1)