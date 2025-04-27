function solution(s) {
    var answer = [0,0];
    let str = s;
    
    while(str !== "1"){
        let len = str.length;
        str = str.split("0").join("");
        answer[1]+= len - str.length;
        answer[0]++;
        
        str = str.length.toString(2);
    }
    
    return answer;
}