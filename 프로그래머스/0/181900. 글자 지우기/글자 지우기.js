function solution(my_string, indices) {
    var answer = '';
    let str = my_string.split("");
    let num = indices.sort((a,b)=> a - b);
    console.log(num)
    num.map((word, index)=> {
        str.splice(word - index,1);
    })
    answer = str.join("");
    return answer;
}
//map할 때 마다 인덱스가 하나씩 줄어들고 있네
