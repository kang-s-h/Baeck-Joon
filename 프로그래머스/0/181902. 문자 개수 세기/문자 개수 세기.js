function solution(my_string) {
    var answer = [];
    let str = my_string.split("");
    for(let i = 0;i<52;i++){
    answer.push(0);
    }
    str.forEach((word)=> {
        let t = word.charCodeAt();
        if(t < 94){
            answer[t - 65] += 1; 
        }else{
            answer[t - 97+26] += 1;
        }
    })
    
    return answer;
}
//대문자 65 ~90
//소문자 97~ 122