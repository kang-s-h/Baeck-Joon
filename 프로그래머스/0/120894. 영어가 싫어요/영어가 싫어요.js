function solution(numbers) {
    var answer = 0;
    let str = numbers;
    let number = {
        zero : 0,
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
    
    }
    Object.keys(number).forEach((num,i,arr)=> {
        while(str.includes(num)){
            let loc = str.indexOf(num);
           str = str.slice(0,loc)+number[num]+str.slice(loc+num.length);
        }
        
    })
    answer = +str;
    return answer;
}