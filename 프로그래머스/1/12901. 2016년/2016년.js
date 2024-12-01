function solution(a, b) {
    var answer = '';
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let date = new Date(`2016/${a}/${b}`);
    let day = date.getDay();
    answer = days[day];
    return answer;
}