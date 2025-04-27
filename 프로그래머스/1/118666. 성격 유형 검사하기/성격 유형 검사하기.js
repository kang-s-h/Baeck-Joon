function solution(survey, choices) {
    var answer = '';
    
    let object = {
        R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0,
    };
    let arr = ["RT","CF","JM","AN"];
    
    const moreBigger = () => {
                
        for(let i = 0;i<arr.length;i++){
        let first = arr[i][0];
        let second = arr[i][1];
            
        if(object[first] === object[second]){
            answer += arr[i].split("").sort()[0];
            continue;    
        }
        answer += object[first] > object[second] ? first : second;
    
            }
        
        }
    
    survey.forEach((matter,index)=> {
        if(choices[index] < 4 ){
            object[matter[0]] += 4 - choices[index]; 
        }else if(choices[index] > 4){
            object[matter[1]] += choices[index] - 4;
        }
    })
    
   moreBigger();
    
    return answer;
}