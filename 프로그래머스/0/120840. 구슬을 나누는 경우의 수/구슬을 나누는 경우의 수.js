function solution(balls, share) {
    var answer = 1;
    let bot = 1;
    let high = 1;
    for(let i = 0;i<share;i++){
        bot *= share - i;
        high *= balls - i;
    }
    answer = high /bot;
    return answer;
}