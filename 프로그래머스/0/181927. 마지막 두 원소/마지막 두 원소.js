function solution(num_list) {
    var answer = [];
    const a = num_list.at(-1);
    const b = num_list.at(-2);
    if(a > b){
        answer =[...num_list,a - b];
    }else{
        answer = [...num_list,a*2]
    }
    return answer;
}
//마지막 원소가 앞보다 크면 마 - 앞 값을 반대면 마 *2  return