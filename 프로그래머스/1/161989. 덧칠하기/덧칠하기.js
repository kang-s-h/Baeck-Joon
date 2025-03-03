function solution(n, m, section) {
    var answer = 0;
    let sectionArr = [...section];

    while (sectionArr.length > 0) {
        const paint = sectionArr[0] + m - 1;
        while (sectionArr[0] <= paint) {
            sectionArr.shift();
        }
        answer++;
    }
    
    return answer;
}


    // let sectionArr = [...section];
    // while(sectionArr.length > 0){
    //     const paint = sectionArr[0] + m - 1;
    //     sectionArr = sectionArr.filter((area)=> area > paint);
    //     answer ++;
    // }