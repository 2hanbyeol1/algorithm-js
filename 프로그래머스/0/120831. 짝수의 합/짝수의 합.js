function solution(n) {
    return Array(n).fill(0).map((_, i) => i+1).filter(e => e % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}