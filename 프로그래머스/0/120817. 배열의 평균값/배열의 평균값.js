function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((acc,cur)=> {
        return acc + cur;
    },0);
    answer = answer / numbers.length;
    return answer;
}