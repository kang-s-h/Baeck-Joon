function solution(rank, attendance) {
    var answer = 0;
    let final = [];
    for(let i = 0;i<rank.length;i++){
        if(attendance[i] == true){
            final.push(rank[i]);
        }
    }
    const arr = final.sort((a,b)=> a - b).slice(0,3);
    
    answer = 10000*rank.indexOf(final[0]) + 100 *rank.indexOf(final[1]) + rank.indexOf(final[2]);
    return answer;
}