function solution(quiz) {
    var answer = [];
    quiz.forEach((str1)=> {
        let str = str1.split(" ");
            if(str[1] == "-"){
                if(+str[0] - +str[2] == +str[4]){
                    answer.push("O");
                }else{
                    answer.push("X");
                }
            }else if(str[1] == "+"){
                if(+str[0] + +str[2] == +str[4]){
                    answer.push("O");
                }else{
                    answer.push("X");
                }
            }
    })
    return answer;
}