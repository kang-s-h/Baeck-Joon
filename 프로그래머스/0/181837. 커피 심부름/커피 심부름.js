function solution(order) {
    var answer = 0;
    order.forEach((ord)=> {
        if(ord.includes("cafelatte")){
            answer +=5000;
        }else{
            answer +=4500;
        }
    })
    return answer;
}
//메뉴  => 가격 / 아무거나 => 4500