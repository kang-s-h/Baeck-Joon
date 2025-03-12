function solution(babbling) {
    var answer = 0;
    let setArr = [...babbling];
    let arr = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < arr.length; i++) {
        setArr = setArr.map((str) => {
            if (str.includes(arr[i] + arr[i])) {
                return "no";
            }
            return str;
        });
    }

    for (let i = 0; i < arr.length; i++) {
        setArr = setArr.map((str) => str.split(arr[i]).join("1"));
    }

    answer = setArr.filter((str) => /^[1]+$/.test(str)).length;

    return answer;
}
