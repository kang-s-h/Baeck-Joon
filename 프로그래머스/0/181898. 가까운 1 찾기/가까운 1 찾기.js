function solution(arr, idx) {
    var answer = 0;
    let i = [];
    let array = arr.slice(idx,arr.length+1);
    array.forEach((item,index)=> {
        if(item == 1){
            i.push(index);
        }
    })
    if(i.length === 0){
        answer = -1;
    }else{
        answer = i[0] + idx;
    }
    console.log(i.length);
    return answer;
}
//크거나 같으면서 라는데?

//idx보다 