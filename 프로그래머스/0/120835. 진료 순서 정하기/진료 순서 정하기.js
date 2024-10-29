function solution(emergency) {
    var answer = [];
    let arr = [...emergency].sort((a,b)=> b - a);
    answer = emergency.map((num)=> {
        let check = arr.indexOf(num);
            return num = check+1;
    })
    return answer;
}