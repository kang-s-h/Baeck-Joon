function solution(num_list) {
    var answer = 0;
    let array = [];
    num_list.forEach((num,index)=>  {
        if(num < 0){
            array.push(index);
        }
    })
    if(array.length === 0){
        answer = -1;
    }else{
        answer = array[0];
    }
    return answer;
}