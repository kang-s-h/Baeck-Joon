function solution(num, total) {
    var answer = [];
    let center = total/num;
    if(Number.isInteger(center)){
        answer.push(center);
        for(let i = 1;i<num/2;i++){
            answer.push(center+i,center-i);
        }
    }else{
        let mid = parseInt(center);
        answer.push(mid,mid+1);
        for(let j = 1;j<=(num-2)/2;j++){
            answer.push(mid-j,mid+1+j);
        }
        
    }
    return answer.sort((a,b)=> a - b);
}