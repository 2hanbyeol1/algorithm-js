function solution(left, right) {
    // 에라토스테네스의 체 알고리즘
    const divisors = Array(right + 1).fill(1) // 약수의 개수 (1 무조건 포함)
    for (let i = 2; i <= right; i++) {
        let j = 1;
        while (i * j <= right) {
            divisors[i * j] += 1;
            j++;
        }
    }
    // 합계
    let sum = 0;
    for(let i = left; i <= right; i++) {
        sum += divisors[i] % 2 === 0 ? i : -i;
    }
    return sum;
}