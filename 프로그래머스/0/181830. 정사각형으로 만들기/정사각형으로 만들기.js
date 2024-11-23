function solution(arr) {
    var answer = [[]];
    let array = [arr.length];
    let setArr = [...arr];
    for(let i=0;i<arr.length;i++){
        array.push(arr[i].length);
    }
    let standard = Math.max(...array);
    
    setArr.forEach((item)=> {
        if(item.length !=standard){
            let itemLength = item.length;
            for(let i = 0;i<standard-(itemLength);i++){
                item.push(0);
                console.log(i);
            }
        }
    })
    if(arr.length != standard){
        let zero = Array(standard).fill(0);
        for(let i = 0;i<standard-arr.length;i++){
            setArr.push(zero);
        }
    }
    answer = setArr;
    return answer;
}
