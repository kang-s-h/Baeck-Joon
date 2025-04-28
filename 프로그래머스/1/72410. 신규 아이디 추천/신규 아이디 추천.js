function solution(new_id) {
    var answer = '';
    
    const first = new_id.toLowerCase();
    
    const regExp1 = /[^a-z0-9\_\.\-]+/g;
    const second = first.replace(regExp1, "");
    
    const regExp2 = /[.]+/g;
    const third = second.replace(regExp2, ".");
    
    const regExp3 = /^[.]|[.]$/g;
    let fourth = third.replace(regExp3,"");
    
    let fifth = "";
    
    if(fourth.length === 0){
        fifth = "a";
        
        if(fifth.length <= 2){
        for(let i = 0;i<= 3-fifth.length;i++){
            fifth += fifth.slice(-1);
        }
    }
    }else if(fourth.length >= 16){
        fifth = fourth.slice(0,15);
        
        if(fifth[fifth.length-1] ==="."){
            fifth = fifth.slice(0,fifth.length-1);
        }
        
    }else{
        fifth = fourth;
    }

    if(fifth.length <= 2){
        for(let i = 0;i<= 3-fifth.length;i++){
            fifth += fifth.slice(-1);
        }
    }
    
    answer = fifth;
    
    return answer;
}

//     1.소문자로 치환 toLowerCase
//     2.알파벳 숫자,뺴기,밑줄,마침표가 아닌 문자 삭제 replaceAll
//     3.연속된 점 1개로 치환
//     4.점이 처음이나 끝이면 제거 
//     5.빈문자열이면 "a"대입
//     6.길이가 16이상이면 15개만 남김 slice
//       제거후 마침표 끝에 있으면 제거 slice
//     7.길이가 2자 이하라면 길이가 3이 될 때 까지 마지막 문자 반복 
    