function solution(nums) {
    var answer = 0;
    const [a,b,c] = nums.sort((a,b)=> b - a);
    let arr = [];
    
    for(let i = 0;i<=a+b+c;i++){
        arr.push(true);
    }
    arr[0] = arr[1] = false;
    
    for(let i = 2;i<a+b+c;i++){
        if(arr[i]== true){
            for (let j = i * i; j <= a+b+c; j += i) {
                arr[j] = false;
            }
        }
    }
    console.log(arr);
    for(let i = 0;i<nums.length-2;i++){
        for(let k = i+1;k<nums.length-1;k++){
            for(let j = k+1;j<nums.length;j++){
                let add = nums[i] + nums[k] + nums[j];
                if(arr[add] == true){
                    answer++;
                }
            }
        }
    }

    return answer;
}