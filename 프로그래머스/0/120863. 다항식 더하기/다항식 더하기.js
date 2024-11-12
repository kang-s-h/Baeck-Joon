function solution(polynomial) {
    var answer = '';
    let x = 0;
    let num = 0;
    polynomial.split(" ").forEach((str)=> {
        if(str.includes("x")){
            if(str == "x"){
                x++;  
            }else{
                x += parseInt(str);
            }
        }
        if(Number.isInteger(+str)){
            num+=+str;
        }
    })
    
    if(num == 0){
        answer = x == 1 ? `x`:`${x}x`;
    }else if(x == 0){
       answer = `${num}`;
    }else{
        answer = x == 1 ? `x + ${num}` : `${x}x + ${num}`;
    }
    return answer;
}