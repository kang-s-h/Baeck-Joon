function solution(id_pw, db) {
    var answer = 'fail';
    db.forEach((str)=> {
        if(str[0] == id_pw[0]){
            if(str[1] == id_pw[1]){
                answer = "login";
            }else{
                answer = "wrong pw";
            }
        }
    })
    return answer;
}