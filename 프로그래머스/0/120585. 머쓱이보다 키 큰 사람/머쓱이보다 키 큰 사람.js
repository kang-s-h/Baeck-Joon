function solution(array, height) {
    var answer = 0;
    array.forEach((h)=> {
        if(height <h ){
            answer ++;
        }
    })
    return answer;
}