function solution(n,a,b)
{
    var answer = 0;
    
    let first = Math.min(a,b);
    let second = Math.max(a,b);
    
    while(first !== second){

        first = Math.ceil(first/2);
        second = Math.ceil(second/2);
        
        answer++;
    }

    return answer;
}
