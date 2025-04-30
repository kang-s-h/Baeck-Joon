function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    const obj = {};

    let setReport = [...new Set(report)];
    
    setReport = setReport.map((str)=> {
        return [...str.split(" ")];
    });
    
    setReport.forEach((arr)=> {
        obj[arr[1]] > 0 ? obj[arr[1]] +=1 : obj[arr[1]] = 1;
    })

    for(const [name,reportNum] of Object.entries(obj)){
        if(reportNum >= k){
            setReport.forEach((arr)=> {
                if(arr[1] === name){
                    answer[id_list.indexOf(arr[0])] += 1;
                }
            })
        }
    }
    
    return answer;
}