function solution(n, arr1, arr2) {
    var answer =  Array.from({ length: n }, () => Array(n).fill(0));
    
    const setArr = (arr) => {
        arr.forEach((num,index)=> {
            let change = num.toString(2);
            
            if(`${change}`.length < n){
                let str="";
                
                for(let i = 0;i<n-change.length;i++){
                    str +="0";
                }
                change = str + String(change);
            }
            change.split("").forEach((num,idx)=> {
                answer[index][idx] += +num; 
            })
        })
    }
    setArr(arr1);
    setArr(arr2);
    
    answer = answer.map((arr)=> {
       return arr.map((num)=> {
            if(num == 0){
                return num = " ";
            }else{
                return num = "#";
            }
        }).join("");
    })
    return answer;
}