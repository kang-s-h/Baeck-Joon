function solution(cipher, code) {
    var answer = '';
    let count = 1;
    for(let i = 0;i<= cipher.length-1;i++){
        if(count % code == 0){
            answer +=cipher[i];
            count++;
        }else{
            count++;
        }
        
    }
    return answer;
}