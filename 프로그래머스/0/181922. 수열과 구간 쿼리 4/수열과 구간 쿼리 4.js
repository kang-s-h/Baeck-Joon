function solution(arr, queries) {
    var answer = [];
    let array = [...arr];
    queries.forEach(([s,e,k])=> {
        arr.slice(s,e+1).forEach((item,index)=>{
            if(s+index % k == 0){
                    array[s + index] += 1;
                }
        })
    })
    answer = [...array];
    return answer;
}