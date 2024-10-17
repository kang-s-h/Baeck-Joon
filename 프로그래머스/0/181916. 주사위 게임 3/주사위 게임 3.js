function solution(a, b, c, d) {
    var answer = 0;
    let checkArr = [a,b,c,d];
    let checkObj = {};
    checkArr.forEach((item)=> {
        if(item in checkObj){
            checkObj[item] += 1;
        }else{
            checkObj[item] = 1;
        }
    });
    if(a == b && b == c && c == d){
        answer = 1111*a;
    }else if(a !== b && b !== c && c !== d && d !== a && b !== d && c !== a){
        answer = checkArr.sort((a,b)=> a - b).at(0);
        }else{
            const valueArr = Object.values(checkObj);
            const keyArr = Object.keys(checkObj).map(Number);
            if(valueArr.includes(3)) {
             answer = (10*keyArr[valueArr.indexOf(3)] + keyArr[valueArr.indexOf(1)])**2;
            }else if(valueArr.includes(1) && valueArr.includes(2)){
                answer = 1;
                valueArr.forEach((item,index)=> {
                    if(item === 1){
                        answer *= parseInt(keyArr[index]);
                    }
                })
            }else{//2세트 일 때 
                let a = keyArr[0];
                let b = keyArr[1];
                answer = (a + b) *Math.abs(a-b);
            }
        }
    return answer;
}
