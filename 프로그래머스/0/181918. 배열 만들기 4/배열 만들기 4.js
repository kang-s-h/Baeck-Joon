function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
    if(stk.length === 0){
            stk.push(arr[i]);
            i += 1;
        }else if(stk.length !== 0 && stk.at(-1) < arr[i]){
            stk.push(arr[i]);
            i += 1;
        }else{
            stk.pop(stk.length -1);
        }
    }
    return stk;
}
// 변수 i를 만들어 초기값을 0 , i가 arr의 길이보다 밑에를 반복 
//stk 빈배열 => arr[i]를 stk에 추가하고  i+1함
//stk 가 있고 마지막 요소가 arr[i]보다 작으면, arr[i]를 뒤에 추가 하고  i+ 1을 한다
//stk가 있고 마지막 요소가 arr[i]보다 크거나 같으면  stk의 마지막 요소를제거한다.