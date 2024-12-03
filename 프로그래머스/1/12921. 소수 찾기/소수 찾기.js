function solution(n) {
    var answer = 0;
    let count = 2;
    let arr = [];
    
    for(let i = 0; i <= n; i++){
        arr.push(true);
    }
    
    arr[0] = arr[1] = false;
    
    let num = 0;
    
    for (let i = 2; i <= Math.sqrt(arr.length); i++) {
        if (arr[i] == true) {
            for (let j = i * i; j <= arr.length; j += i) {
                arr[j] = false;
            }
        }
    }
    answer = arr.filter((num)=>num).length;
    return answer;

    
}