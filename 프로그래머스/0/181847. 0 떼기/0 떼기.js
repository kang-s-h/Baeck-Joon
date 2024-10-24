function solution(n_str) {
    var answer = '';
    let num;
    for(let i = 0;i<n_str.length;i++){
        if(n_str[i] != n_str[i+1]){
            num = n_str[0] == 0 ? i + 1 : i;
            break;
        }
    }
    answer = n_str.split("").slice(num,n_str.length).join("");
    return answer;
}