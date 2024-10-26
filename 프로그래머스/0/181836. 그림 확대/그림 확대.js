function solution(picture, k) {
    var answer = [];
    let arr1 = [];
    // picture.forEach((pic)=> {
    //     arr1.push([...pic].map((dob)=> {
    //         return dob = dob.repeat(k);
    //     }))
    // })
    arr1 = picture.map((pic)=> {
      return pic.split("").map((str)=> {
            return str.repeat(k);
        })
    })
    arr1 = arr1.map((str)=> {
        return str.join("");
    })
    arr1.forEach((str)=> {
        for(let i = 0;i<k;i++){
            answer.push(str);
        }
    })
    return answer;
}
//row 배 
//colum배 