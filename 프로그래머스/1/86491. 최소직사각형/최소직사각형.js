function solution(sizes) {
    var answer = 0;
    let max = Math.max(...sizes.flat());
    let arr = [];
    console.log(max);
    
    sizes.forEach((item)=> {
        if(item[0] <= item[1]){
            arr.push(item[0]);
        }else{
            arr.push(item[1]);
        }
    })
    console.log(arr);
    answer = max * Math.max(...arr);
    return answer;
}