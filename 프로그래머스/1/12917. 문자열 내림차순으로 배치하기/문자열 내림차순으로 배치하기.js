function solution(s) {
    var answer = '';
    let str1 = '';
    let str2 = '';
    s.split("").forEach((word)=> {
        if(word.charCodeAt() < 95){
            str1 +=word;
        }else{
            str2 += word;
        }
    })
    
    answer = str2.split("").sort().reverse().join("").concat(str1.split("").sort().reverse().join(""));
    return answer;
}