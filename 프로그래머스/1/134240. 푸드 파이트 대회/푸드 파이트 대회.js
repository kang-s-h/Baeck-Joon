function solution(food) {
    var answer = '';
    let arr = [];
    food.forEach((num,index)=> {
        if(0<index){
            arr.push(parseInt(num / 2));
        }
    })
    console.log(arr);
    let str = "";
    arr.forEach((num,index)=> {
        for(let i = 0;i<num;i++){
            str+=(index+1);
        }
    })
    console.log(str);
    answer = str + "0" + str.split("").reverse().join("");
    return answer;
}

//일단 음식 수를 2로 나눴을 때의 갯수만 사용해야함 
//만들고 0넣고 reverse로
