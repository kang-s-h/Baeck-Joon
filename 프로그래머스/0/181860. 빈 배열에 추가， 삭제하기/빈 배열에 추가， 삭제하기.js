function solution(arr, flag) {
    var answer = [];    
    flag.forEach((bool,index)=> {
        if(bool == true){
            for(let i = 0;i<arr[index]*2;i++){
                answer.push(arr[index]);   
            }
        }else{
            let num = answer.length - arr[index];
            answer.splice(num,arr[index]);
        }
    })
    return answer;
}

//true X푸시 arr[i] * 2
//false arr[i]개 제거 리턴 