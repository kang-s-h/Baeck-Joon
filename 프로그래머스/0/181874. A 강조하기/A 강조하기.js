function solution(myString) {
    var answer = '';
    let array = myString.split("");
    const t = array.map((word)=> {
        if(word === "a"){
            return word = "A";
        }else if(word !== "A" && 65 <= word.charCodeAt() && word.charCodeAt() <=90){
            return word.toLowerCase();
        }else return word;
    })
    answer = t.join("");
    return answer;
}