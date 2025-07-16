function solution(n, w, num) {
    const storage = [];
    let currentRow = [];

    for (let i = 1; i <= n; i++) {
        currentRow.push(i);

        if (i % w === 0 || i === n) {
            const isReversedRow = storage.length % 2 !== 0;

            if (i === n && n % w !== 0) {
                const paddingCount = w - (n % w);
                for (let j = 0; j < paddingCount; j++) {
                    currentRow.push(0);
                }
            }

            if (isReversedRow) {
                currentRow.reverse();
            }

            storage.push(currentRow);
            currentRow = [];
        }
    }

    const targetRowIndex = Math.floor((num - 1) / w);
    const targetColIndex = storage[targetRowIndex].indexOf(num);

    const answer = storage
        .slice(targetRowIndex)
        .filter(row => row[targetColIndex] !== 0)
        .length;

    return answer;
}