function solution(number) {
    var answer = 0;
    let len = number.length;
    for(let i = 0;i<len-2;i++){
        for(let j = i+1;j<len-1;j++){
            for(let k = j+1;k<len;k++){
                if(number[i] + number[j] + number[k] == 0){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}
//3개를 더했을 때 , 모든 경우의 수 다 생각 , 
//반복문 3번  or 0 ~ n 까지 중 3개 고르는 알고리즘 