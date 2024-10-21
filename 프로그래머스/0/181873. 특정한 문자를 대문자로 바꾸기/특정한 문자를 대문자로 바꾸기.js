function solution(my_string, alp) {
    var answer = '';
    let array = my_string.split("");
    const text = array.map((word)=>  {
        if(word == alp){
            return word.toUpperCase();
        }else{
            return word;
        }
    })
    answer = text.join("");
    return answer;
}