function solution(arr, k) {
    var answer = [];
    answer = arr.map((num)=> {
        if(k % 2 == 0 ){
            return num + k;
        }else{
            return num * k;
        }
    })
    return answer;
}