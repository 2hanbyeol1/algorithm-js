function solution(s) {
    const half = s.length / 2;
    return s.length % 2 === 0 ? s.slice(half - 1, half + 1) : s.slice(half, half + 1);
}