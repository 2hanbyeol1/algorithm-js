function solution(arr) {
    const min = Math.min(...arr);
    return arr.length > 1 ? arr.filter(a => a !== min) : [-1];
}