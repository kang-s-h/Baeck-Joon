function solution(n, w, num) {
    var answer = 0;
    
    let storage = [];
    let arr = [];
    let count = 0;
    let idx = 0;
    const remain = Math.floor((num - 1) / w);
    
    for(let i = 1; i <= n ; i++){
        arr.push(i);
        if(i % w === 0 || i === n){
            
            if(i===n && n % w !== 0){
                for(let j = n%w; j<w; j++){
                    arr.push(0);
                }
            }
            
            if(count % 2 !== 0){
                arr.reverse();
            }
            
            storage.push(arr);
            
            arr = [];
            count++;
        }
       
        
    }
    
    storage[remain].forEach((item,index)=> {
        if(item === num){
            idx = index;
        }
    })
    
    for(let k = remain; k<storage.length;k++){
        if(storage[k][idx] !== 0){
            answer++;
        }
    }
    
    return answer;
}