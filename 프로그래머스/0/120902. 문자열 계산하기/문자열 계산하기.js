function solution(my_string) {
    var answer = 0;
    let num = +my_string.split(" ")[0];
    my_string.split(" ").forEach((str,i,arr)=> {
        if(isNaN(str)){
            if(str == "+"){
                num += +arr[i+1];
            }else if(str == "-"){
                num -= +arr[i+1];
            }
        }
    })
    answer = +num;
    return answer;
}