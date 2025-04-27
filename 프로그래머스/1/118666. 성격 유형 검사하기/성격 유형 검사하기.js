function solution(survey, choices) {
    var answer = '';
    
    let object = {
        R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0,
    };
    
    const moreBigger = (kind) => {
        if(object[kind[0]] === object[kind[1]]){
            return kind.split("").sort()[0];
        }
        return object[kind[0]] > object[kind[1]] ? kind[0] : kind[1];
    }
    
    survey.forEach((matter,index)=> {
        if(choices[index] < 4 ){
            object[matter[0]] += 4 - choices[index]; 
        }else if(choices[index] > 4){
            object[matter[1]] += choices[index] - 4;
        }
    })
    
    answer = moreBigger("RT") + moreBigger("CF") + moreBigger("JM") + moreBigger("AN"); 
    
    return answer;
}