function solution(num_list) {
    var answer = 0;
    let array = [...num_list];
    array.forEach((num)=> {
        while(num !== 1){
            if(num %2 == 0){
                answer +=1;
                num = num / 2;
            }else{
                answer+=1;
                num = (num-1)/2;
            }
        }
    })
    return answer;
}
//계산 다 하고 그냥 횟수 리턴