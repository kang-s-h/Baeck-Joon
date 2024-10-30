function solution(array, n) {
    var answer = 0;
    const arr = array.map((str)=> {
        return str = Math.abs(str - n);
    })
    const min = Math.min(...arr);
    let a = arr.indexOf(min);
    let b = arr.lastIndexOf(min);
    if(a !== b){
        answer = array[a] > array[b] ? array[b] : array[a];
    }else{
        answer = array[a];
    }
    
        
    return answer;
}