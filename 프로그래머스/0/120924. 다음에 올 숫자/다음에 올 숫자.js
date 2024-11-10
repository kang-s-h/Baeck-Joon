function solution(common) {
    var answer = 0;
    let arr = [];
    common.forEach((num,ind,array)=> {
        if(ind <= common.length-2){
            arr.push(array[ind+1]-num);
        }
    })
    if(arr[0] == arr[1]){
        answer = common.at(-1) + arr[0];
    }else{
        answer = common.at(-1) * (arr[1] / arr[0]);
        console.log(answer);
    }

    return answer;
}