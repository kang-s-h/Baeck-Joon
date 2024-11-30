function solution(n, arr1, arr2) {
    return arr1.map((a, i) => {
        // 이진수 변환 및 OR 연산으로 겹침 처리
        const binary = (a | arr2[i]).toString(2).padStart(n, "0");
        // 이진수를 #과 공백으로 변환
        return binary.replace(/1/g, "#").replace(/0/g, " ");
    });
}