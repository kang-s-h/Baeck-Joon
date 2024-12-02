function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1;i<=number;i++){
        let count = 0;
        let sqrt = Math.sqrt(i);
        for(let j = 1;j<=sqrt;j++){
            if (i % j === 0) {
                count++; 
                if (j !== i/ j) {
                    count++;
                } 
            }
        }
        count <= limit ? answer+=count : answer+=power;
        
    }

    return answer;
    
    
}
//번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
//단, 공격력 제한 제한 수치보다 큰거 구매하려면 협약기관에서 정한 공격력 가진 무기 구매
//공격력 1당 1kg의 철이 필요하다 

