function solution(num, k) {
    var answer = 0;
    let nu = String(k);
    const arr = Array.from(String(num));
    if(arr.includes(nu)){
        answer = arr.indexOf(nu) + 1;
    }else{
        answer = -1;
    }
    return answer;
}