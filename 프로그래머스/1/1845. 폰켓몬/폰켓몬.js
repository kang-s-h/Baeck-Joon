function solution(nums) {
    var answer = 0;
    let set = new Set(nums).size;
    
    if(nums.length/2 < set){
        answer = nums.length/2;
    }else{
        answer = set;
    }
    return answer;
}