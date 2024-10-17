function solution(my_string, queries) {
    let str = [...my_string]; 
    queries.forEach(([a, b]) => {
        let re = str.slice(a, b + 1).reverse(); 
        str.splice(a, b - a + 1, ...re); 
    });
    answer = str.join('');
    return answer;
}
