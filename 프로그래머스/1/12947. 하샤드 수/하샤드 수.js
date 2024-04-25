function solution(x) {
    return x % [...x.toString()].reduce((acc, cur) => acc += parseInt(cur), 0) === 0;
}