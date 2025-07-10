function solution(n,a,b)
{
    var answer = 1;
    
    let first = a>b ? b : a;
    let second = a>b ? a : b;
    
    if(first + 1 === second && first%2 !== 0 && second%2 === 0) return answer;
    
    while(first+1 !== second || (first%2 === 0 && second%2 !== 0)){

        first = (first%2 === 0) ? first/2 : (first+1)/2;
        second = (second%2 === 0) ? second/2 : (second+1)/2;
        
        answer++;
    }

    return answer;
}