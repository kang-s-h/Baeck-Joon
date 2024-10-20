function solution(arr, queries) {
    var answer = [];
    let array = [...arr];
    queries.forEach(([a,b])=> {
    array.forEach((num,index)=> {
        if(a<= index && index <= b){
            array[index] +=1 ;
        }
        })
    })
    answer = array;
    return answer;
}
