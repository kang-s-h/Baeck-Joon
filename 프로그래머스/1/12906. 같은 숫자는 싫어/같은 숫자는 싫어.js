function solution(arr)
{
    var answer = [];
    //뒤랑 같은지 같으면 삭제 다르면 넘어가기 
    arr.forEach((num,index,arr)=> {
        if(num !== arr[index+1]){
            answer.push(num);
        }
    })
    return answer;
}