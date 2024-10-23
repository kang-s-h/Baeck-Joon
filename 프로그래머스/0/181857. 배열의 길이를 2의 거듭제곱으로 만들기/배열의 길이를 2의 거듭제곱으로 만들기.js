function solution(arr) {
    var answer = [];
    if(Number.isInteger(Math.log2(arr.length))){
        answer = arr;
    }else{
      const num = 2**parseInt(Math.log2(arr.length)+1) - arr.length;
      answer = arr;
      for(let i = 0;i<num;i++){
          answer.push(0);
      }
    }
    return answer;
}

//2의 거듭 제곱? 