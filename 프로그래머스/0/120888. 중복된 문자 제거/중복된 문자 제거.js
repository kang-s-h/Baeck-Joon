function solution(my_string) {
    var answer = '';
    let arr = [...my_string].reverse();
    let array = [];
    for(let i = 0 ;i< arr.length;i++){
        if(i == arr.lastIndexOf(arr[i]) && i != -1){
            array.push(arr[i]);
        }
    }
    answer = array.reverse().join("");
    return answer;
}