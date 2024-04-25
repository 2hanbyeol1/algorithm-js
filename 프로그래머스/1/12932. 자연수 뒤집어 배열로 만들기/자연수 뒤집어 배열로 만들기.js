function solution(n) {
    var answer = [...String(n)].reverse().map(a => parseInt(a));
    return answer;
}