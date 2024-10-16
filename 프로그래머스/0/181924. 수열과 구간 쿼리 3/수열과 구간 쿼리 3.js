function solution(arr, queries) {
    var answer = [];
    queries.forEach((item)=> {
        let [a,b] = item;
        let a2 = arr[a]; //a가 있는 위치
        let b2 = arr[b]; // b가 있는 위치 
        arr[a] = b2;
        arr[b] = a2;
        
    })
    answer = arr;
    return answer;
}

//1.지우고 넣고 지우고 넣고 
//2.서로의 인덱스를 받고 바꿔주기?
//3.splice?
