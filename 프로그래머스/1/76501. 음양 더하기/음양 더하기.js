function solution(absolutes, signs) {
    return absolutes.reduce((acc, abs, idx) => acc + (signs[idx] ? abs : -abs), 0);
}