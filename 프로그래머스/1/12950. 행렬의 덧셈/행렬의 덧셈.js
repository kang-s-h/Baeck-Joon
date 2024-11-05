function solution(arr1, arr2) {
    var answer = [];
    let i = 0;
    let j = 0;
    let array = [];
    while(arr1[i] != undefined){
        while(arr1[i][j] != undefined){
          array.push(arr1[i][j] + arr2[i][j]);
            j++;
        }
        j = 0;
        i++;
        answer.push(array);
        array = [];
    }
    return answer;
}