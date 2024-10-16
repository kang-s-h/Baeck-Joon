function solution(arr, queries) {
    var answer = [];
    queries.forEach((item)=> {
        let [s,e,k] = item;
        let array = [];
        arr.filter((num,index)=>{
            if( s<= index && index <= e && num > k){
                 array.push(num);
            }
            
        })
        if(array.length !== 0){
            answer.push(array.sort((a,b) => a-b).at(0));
        }else if(array.length === 0){ answer.push(-1);}
       
    })
    return answer;
}

