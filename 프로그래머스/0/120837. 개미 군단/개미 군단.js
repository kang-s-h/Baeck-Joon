function solution(hp) {
    var answer = 0;
    let cul = hp;
    const array = [5,3,1];
    for(let i =0;i<3;i++){
        answer += parseInt(cul / array[i]);
        cul = cul % array[i];
        if(cul == 0){
            break;
        }
    }
    
    return answer;
}