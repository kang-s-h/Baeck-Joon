function solution(my_string, m, c) {
    var answer = '';
    let array = [];
    for(let i = 0;i<my_string.length/m;i++){
        array.push(my_string.slice(i*m,i*m+m));
    }
    const text = array.forEach((word)=> {
        answer += word.slice(c-1,c);
    })
    console.log(array);
    return answer;
}
