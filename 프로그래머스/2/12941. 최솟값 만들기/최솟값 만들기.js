function solution(A,B){
    var answer = 0;
    
    let Aarr = A.sort((a,b)=> a-b);
    let Barr = B.sort((a,b)=> b-a);
    
    Barr.forEach((num,index)=> {
        answer+= num * Aarr[index];
    })

    return answer;
}