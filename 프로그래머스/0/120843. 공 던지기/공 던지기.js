function solution(numbers, k) {
    var answer = 0;
    let count = 0;
    let l = numbers.length;
    for(let i =0;i<k-1;i++){
        count+=2;
        if(count == l){
            count = 0;
        }else if(count > l){
           count = count - l;
        }
    }
    answer = numbers[count];
    return answer;
}