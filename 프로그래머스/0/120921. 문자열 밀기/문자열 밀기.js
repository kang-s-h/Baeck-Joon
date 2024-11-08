function solution(A, B) {
    var answer = 0;
    let str = A;
    for(let i = 0;i<A.length;i++){
        if(str == B){
            break;
        }else{
            answer++;
            console.log(str,B)
        }
        let word = str.slice(0,str.length-1);
        let last = str.at(-1);
        str = last + word;
    }
    if(answer == str.length){
        answer = -1;
    }
    return answer;
}