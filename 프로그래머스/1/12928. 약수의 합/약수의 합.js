function solution(n) {
    return Array(n).fill()
        .reduce((acc, _, i) => acc += n % (i+1) === 0 ? i+1 : 0, 0);
}