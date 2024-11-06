function solution(s) {
    var answer = '';
    let array = s.split(" ");
    const arr = array.map((str)=> {
        return str.split("").map((st,i)=> {
            if(i % 2 == 0){
                return st.toUpperCase();
            }else{
                return st.toLowerCase();
            }
        }).join("");
    })
    answer = arr.join(" ");
    return answer;
}