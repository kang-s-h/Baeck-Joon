function solution(order) {
    var answer = 0;
    order.forEach((ord)=> {
        if(ord.includes("americano") || ord.includes("anything")){
            answer +=4500;
        }else{
            answer +=5000;
        }
    })
    return answer;
}
//메뉴  => 가격 / 아무거나 => 4500