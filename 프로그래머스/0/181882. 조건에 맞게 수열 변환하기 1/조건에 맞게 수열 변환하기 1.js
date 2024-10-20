function solution(arr) {
    var answer = [];
    let array = arr.map((num)=> {
        if(50 <= num && num % 2 == 0){
            return num / 2;
        }else if(num < 50 && num % 2 !== 0){
            return num * 2;
        }else{
            return num;
        }
    })
    answer = array;
    return answer;
}