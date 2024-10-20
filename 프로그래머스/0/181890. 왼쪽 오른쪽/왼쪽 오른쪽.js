function solution(str_list) {
    var answer = [];
    const a = str_list.indexOf("l");
    const b = str_list.indexOf("r");
    const c = str_list.includes("l");
    const d = str_list.includes("r");
    
    if(c && d){
        if(a < b){
            answer = str_list.slice(0,a);
        }else{
            answer = str_list.slice(b+1,str_list.length);
        }
    }else if(c && !d){
        if(a !== -1){
            answer = str_list.slice(0,a);
        }
    }else if(!c && d){
        if(b !== -1){
            answer = str_list.slice(b+1,str_list.length);
        }
    }
  
    return answer;
}

//l r 둘다 이씅ㄹ 때  l만 r만 둘다 없을 떄 
// 둘다 있을 때 둘다 -1 아님 ==> 
// l만 있을 때 a가 -1 / l 왼쪽이 빈배열일 때
//r만 있을 때 b가 -1일 떄 /r 오른쪽이 빈배열일 때 
//l,r 둘다 없을 떄 ==> 원래 answer
