function solution(array, n) {
    const arr = array.map(str => Math.abs(str - n));
    
    const min = Math.min(...arr);
    
    const closestValues = array.filter((_, i) => arr[i] === min);
    
    return Math.min(...closestValues);
}