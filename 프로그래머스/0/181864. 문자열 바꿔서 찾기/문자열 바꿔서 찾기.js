function solution(myString, pat) {
    var answer = 0;
    const array = myString.split("");
    const setArr = array.map((str)=> {
        if(str == "A"){
            return str = "B";
        }else{
            return str = "A";
        }
    })
    if(setArr.join("").includes(pat)){
        answer = 1;
    }
    return answer;
}