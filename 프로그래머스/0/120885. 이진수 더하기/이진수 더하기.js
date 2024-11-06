function solution(bin1, bin2) {
    var answer = '';
    
    const twot = (num) => {
        let count = 1;
        let result = 0;
        for (let i = num.length - 1; i > -1; i--) {
            result += +num[i] * count;
            count = count * 2;
        }
        return result;
    };
    const sum = twot(bin1)+twot(bin2);

    let arr = [];
    let num1 = sum;
    while(num1 != 0 && num1 != 1){
        arr.push(num1 % 2);
        num1 = Math.floor(num1 / 2);
        console.log(num1);
    }
    if(num1 == 1){
        arr.push(1);
    }else{
        arr.push(0);
    }
    answer = arr.reverse().join("");
    
    return answer;
}