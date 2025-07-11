function solution(people, limit) {
    people.sort((a, b) => a - b);
    let i = 0;
    let j = people.length - 1;
    let answer = 0;

    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        answer++;
    }

    return answer;
}
