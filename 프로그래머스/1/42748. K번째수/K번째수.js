function solution(array, commands) {
    var answer = [];
    commands.forEach((arr)=> {
        let [fir,end,ind] = arr;
        let setArr = array.slice(fir-1,end);
        let num = setArr.sort((a,b)=> a - b)[ind-1];

        answer.push(num);
    })
    return answer;
}