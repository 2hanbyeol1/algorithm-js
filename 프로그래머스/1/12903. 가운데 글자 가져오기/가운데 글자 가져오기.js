function solution(s) {
    const half = s.length / 2;
    return s.slice(s.length % 2 === 0 ? half - 1 : half, half + 1)
}