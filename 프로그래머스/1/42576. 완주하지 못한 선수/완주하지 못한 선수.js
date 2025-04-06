function solution(participant, completion) {
    var answer = '';
//         completion.forEach((CompletPerson)=> {
//         const isComplet = participant.findIndex((person)=> person === CompletPerson);
//         participant[isComplet] = "";
//     })
//     answer = participant.join("");
    
     participant.sort();
     completion.sort();
    
    for(let i = 0 ; i < participant.length;i++){
        if(participant[i] !== completion[i]){
            return answer = participant[i];
        }
    }
    
    
    return answer;  
}