function solution(a, d, included) {
    var answer = 0;
    included.map((bool,index)=>{
        if(bool === true){
            answer += a+(index)*d;
        }
    })
    
    return answer;
}


// a 초항 / d 공차  a(n-1)d 
//included[i]가 i + 1항을 의미 => 1항이 [0] true인 항만 더해라 