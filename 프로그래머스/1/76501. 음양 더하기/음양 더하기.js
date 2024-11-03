function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((bool,index)=> {
        if(bool == true){
            answer += absolutes[index];
        }else{
            answer-= absolutes[index];
        }
    })
    return answer;
}