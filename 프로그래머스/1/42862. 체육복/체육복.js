function solution(n, lost, reserve) {
    var answer = 0;
    
    let setLostArr = [];
    let setReserveArr = [];
    
    setReserveArr = reserve.sort((a,b)=> a - b).filter((number)=> !lost.includes(number));
    setLostArr = lost.sort((a,b)=> a - b).filter((number)=> !reserve.includes(number));
    
    setLostArr.forEach((lostPerson,index)=> {
        if(setReserveArr.includes(lostPerson)){
            setReserveArr[setReserveArr.indexOf(lostPerson)] = -1;
            setLostArr[index] = -1;
        }else if(setReserveArr.includes(lostPerson - 1)){
            setReserveArr[setReserveArr.indexOf(lostPerson-1)] = -1;
            setLostArr[index] = -1;
        }else if(setReserveArr.includes(lostPerson + 1)){
            setReserveArr[setReserveArr.indexOf(lostPerson+1)] = -1;
            setLostArr[index] = -1;
        }
    })
    
    answer = n - setLostArr.filter((number)=> number !== -1).length;
    
    
    return answer;
}