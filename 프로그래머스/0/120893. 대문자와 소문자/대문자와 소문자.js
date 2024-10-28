function solution(my_string) {
    var answer = '';
    const arr = my_string.split("").map((str)=> {
        let word = str.charCodeAt();
        if(word < 94){
            return String.fromCharCode(word + 32);
        }else{
            return String.fromCharCode(word - 32);
        }
    })
    answer = arr.join("");
    return answer;
}
//97~122
//65~90