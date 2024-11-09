function solution(babbling) {
    var answer = 0;
    let arr = ["aya", "ye", "woo", "ma"]
    let array = [...babbling];
    for(let i = 0;i<4;i++){
        let arra = array.map((str)=> {
            return str.split(arr[i]).join(" ");
        })
        array = arra;
        console.log(array);
    }
    let a = array.forEach((str)=> {
        if(str.trim() == ""){
            answer++;
        }
    })
   
    return answer;
}