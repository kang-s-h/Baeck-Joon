function solution(arr, n) {
    var answer = [];
    let setArr = [...arr];
    let length = setArr.length;
    answer = setArr.map((num,index)=> {
        console.log(typeof(num));
        if(length % 2 == 0){
            return index % 2 != 0 ? num += n : num;
        }else{
            return index % 2 == 0 ? num += n : num;
        }
    })
    
    return answer;
}