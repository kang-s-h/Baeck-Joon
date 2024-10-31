function solution(s) {
    var answer = 0;
    s.split(" ").forEach((num,index,arr)=> {
        num == "Z" ? answer -= +arr[index-1] : answer += +num;
    })
    return answer;
}