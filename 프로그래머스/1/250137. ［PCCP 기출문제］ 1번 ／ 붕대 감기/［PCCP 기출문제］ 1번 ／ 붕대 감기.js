function solution(bandage, health, attacks) {
    const max = health;
    
    for(let i = 0;i<attacks.length;i++){
        health -= attacks[i][1];
        
        if(health <= 0){
            return -1;
        }
        
        if (i < attacks.length - 1){
            let healingTime = attacks[i+1][0] - attacks[i][0] - 1;
            let sucessHeal = Math.floor(healingTime / bandage[0]);

            health += healingTime * bandage[1] + sucessHeal * bandage[2];

            if (health > max){
                health = max;
            }
        }
    }
    
    return health;
}
