function solution(code) {
    var answer = '';
    let mode = 0;
    let array = [];
    code.split("").map((word,index)=> {
    if(mode == 0){
        if(word == 1 || word == 0){
            mode = 1;
        }else {
            if(index % 2 == 0) array.push(word);
        }
    }else{
        if(word == 0 || word == 1){
            mode = 0;
        }else{
            if(index % 2 !== 0) array.push(word);  
        }
    }
    })
    answer = array.join("")
    if(answer == ""){
    answer = "EMPTY";
    }
    
    return answer;
}

//문자열에 1이 있는 경우 mode가 바뀐다.
//mode는 0과 1이 있다.
//mode가 0일 때 , idx가 짝수 일 떄 값이 1이 아니면 ret맨뒤에 [idx]니까 해당 문자 추가 
//mode가 1일 때 , idx가 홀수 일 때 값이 1이 아니면 ret맨뒤에 [idx]니까 해당 문자 추가 