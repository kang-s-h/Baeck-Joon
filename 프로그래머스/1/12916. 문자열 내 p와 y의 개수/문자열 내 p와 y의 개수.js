function solution(s){
    var answer = true;
    let count = 0;
    s.toLowerCase().split("").forEach((word)=> {
        if(word == "p"){
            count++;
        }else if(word == "y"){
            count--;
        }
    })
    if(count !==0){
        answer = false;
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}