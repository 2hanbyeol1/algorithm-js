function solution(arr, idx) {
    var answer = arr.slice(idx).findIndex((el) => el === 1);
    return answer === -1 ? -1 : answer + idx;
}