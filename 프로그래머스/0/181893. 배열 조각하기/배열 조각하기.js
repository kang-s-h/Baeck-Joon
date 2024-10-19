function solution(arr, query) {
    var answer = [];
    let array = [...arr];
    query.forEach((item,index)=> {
        if(index % 2 == 0){
           array = array.slice(0,item + 1);
            }else{
               array = array.slice(item,array.length)
            }
    })
    answer = array;
    return answer;
}
//quer의 짝수 인덱스에서는 