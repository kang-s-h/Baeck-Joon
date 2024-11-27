function solution(s) {
    var answer = [];
    
    s.split("").forEach((word,index)=> {
        let arr = s.slice(0,index);
        let str = arr.lastIndexOf(word);
        (str && str != -1 || str == 0) ? answer.push(arr.length-str) : answer.push(-1);
    })
    
    return answer;
}

// 하나하나 생각하기 ==> 순회 
// 앞에 볼 때 처음부터 그 인덱스 까지 slice 하고 그거에서 lastIndexof()사용


