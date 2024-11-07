function solution(dots) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    
    dots.forEach((str)=> {
        arr1.push(str[0]);
        arr2.push(str[1]);
    })
    
    arr1.sort((a,b)=> a - b);
    arr2.sort((a,b)=> a - b);
    
    answer = ((arr1[2]-arr1[0]) * (arr2[2]-arr2[0]))
    return answer;
}