function solution(phone_number) {
    var answer = '';
    let arr = [...phone_number].reverse();
    const arr2 = arr.map((num,index)=> {
        if(3 < index){
            return num = "*";
        }else{
            return num;
        }
    })
    answer = arr2.reverse().join("");
    return answer;
}