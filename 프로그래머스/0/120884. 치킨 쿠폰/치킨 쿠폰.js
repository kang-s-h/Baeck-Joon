function solution(chicken) {
    var answer = 0;
    let count = chicken;
    while(count >= 10){
        answer += parseInt(count / 10);
       count = parseInt(count / 10)+ (count % 10);
    }
    return answer;
}

//10장 ==> 1마리 공짜
//서비스 치킨에도 쿠폰 줌
// 100마리 => 10마리 + 1
// 1081 /10 => 108마리 + 1  / 10=> 10마리 +9마리 => 1마리 +9마리 => 1마리  
