function solution(n, slicer, num_list) {
    var answer = [];
    let array = [];
    let [a,b,c] = slicer;
    if(n == 1){
        answer = num_list.slice(0,b+1);
    }else if(n == 2){
        answer = num_list.slice(a);
    }else if(n == 3){
        answer = num_list.slice(a,b+1);
    }else{
        array = num_list.slice(a,b+1);
        array.forEach((num,index)=> {
            if(index % c == 0){
                answer.push(num);
            }

        })
    }
    return answer;
}