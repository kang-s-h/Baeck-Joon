function solution(s) {
    var answer = 0;
    s.split(" ").forEach((num,index,arr)=> {
        if(num == "Z"){
            answer -= +arr[index-1];
        }else{
            answer += +num;
        }
    })
    return answer;
}