function solution(numbers) {
    var answer = 0;
    const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0 ; i<number.length; i++){
        numbers = numbers.split(number[i]).join(i)
    }
    answer = +numbers;
    
    return answer;
}