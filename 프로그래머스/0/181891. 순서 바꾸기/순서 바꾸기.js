function solution(num_list, n) {
    var answer = [];
    let a = num_list.slice(n,num_list.length);
    let b = num_list.slice(0,n);
    console.log(a);
    console.log(b);
    answer = [a,b].flat();
    return answer;
}

// 앞 / 뒤 +인덱스