function solution(n) {
    return Array(n).fill()
        .map((_, i) => i + 1)
        .filter(e => e % 2 === 1);
}