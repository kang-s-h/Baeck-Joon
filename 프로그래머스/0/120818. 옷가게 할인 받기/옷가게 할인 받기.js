function solution(price) {
    var answer = 0;
    if(500000 <= price){
        answer = parseInt(price * 80 / 100);
    }else if(300000 <=price){
        answer = parseInt(price * 90 / 100);
    }else if(100000<= price){
        answer = parseInt(price * 95 /100);
    }else{
        answer = price;
    }
    return answer;
}