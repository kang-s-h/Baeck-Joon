function solution(arr) {
    var answer = [];
    for(let i = 0;i<arr.length;i++){
        if(answer.length === 0){
            answer.push(arr[i]);
        }else if(answer.length !== 0 && answer.at(-1) == arr[i]){
            answer.pop();
        }else if(answer.length !== 0 && answer.at(-1) != arr[i]){
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0){
        answer.push(-1);
    }
    return answer;
}

//i 초기값 0 / i가 arr길이보다 작으면 반복 / stk 빈배열 -> arr[i]추가 i + 1
//stk 원소 , 마지막 원소 = arr[i] -> skt 마지막 제거 i + 1
//stk 원소 , 마지막 원소!= arr[i] -> skt 마지막 arr[i]추가 i+ 1