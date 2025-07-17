function solution(players, callings) {
    var answer = [];
    
    const map = new Map();
    
     players.forEach((name, idx) => {
     map.set(name, idx);
    });
    
    
    for(let i = 0;i<callings.length;i++){
        const called = callings[i];
        const loc = map.get(called);
        
        const player = players[loc-1];
        
        players[loc-1] = called;
        players[loc] = player;
        
        map.set(called, loc - 1);
        map.set(player, loc);
    }
    answer = players;
    
    return answer;
}
