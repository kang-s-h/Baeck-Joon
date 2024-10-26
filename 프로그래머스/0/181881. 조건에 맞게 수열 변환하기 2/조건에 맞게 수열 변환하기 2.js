function solution(arr) {
    var answer = 0;
    let array = [...arr];
    let arr1 = [];
    for(let i = 1;i<arr.length;i++){
        arr1 = array.map((num)=> {
        if(num < 50 && num % 2 != 0){
            return num = num * 2 + 1;
        }else if(50 <= num && num % 2 == 0){
            return num = num /2;            
        }else{
            return num = num;
        }
    })
        if(JSON.stringify(array) === JSON.stringify(arr1)){
            break;
        }
        answer +=1;
        array = arr1;
    }
    return answer;
}