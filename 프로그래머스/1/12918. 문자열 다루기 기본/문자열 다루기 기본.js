function solution(s) {
    const { length } = s;
    const found = [...s].find((ch) => isNaN(ch))
    return found ? false : length === 4 || length === 6;
}