function solution(arr, intervals) {
    var answer = [];
    intervals.flatMap(([a,b])=>  {
        answer.push(arr.slice(a,b+1));
    })
    return answer.flat();
}