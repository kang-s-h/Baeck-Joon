function solution(s, n) {
    var answer = '';
    
    s.split("").forEach((word)=> {
        let code = word.charCodeAt();
        if( 65<= code && code <= 90){
            if(90 < code + n ){
                answer += String.fromCharCode(code + n - 26);
            }else{
                answer += String.fromCharCode(code + n);
            }
        }else if( 97 <= code && code <= 122){
            if(122 < code + n ){
                answer += String.fromCharCode(code + n - 26);
            }else{
                answer += String.fromCharCode(code + n);
            }
        }else{
            answer +=word;
        }
    })
    
    return answer;
}

// 대문자는 대문자 , 소문자는 소문자 , 알파벳 개수 26개 
//대문자 : 65 ~ 90 / 소문자 : 97 ~ 122  25차이 