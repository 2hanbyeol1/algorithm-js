// n 참가자 수
// a A번 참가자
// b B번 참가자
function solution(n, a, b) {
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a / 2); // 4 -> 2 -> 1 -> 1
        b = Math.ceil(b / 2); // 7 -> 4 -> 2 -> 1
        answer++;             // 0 -> 1 -> 2 -> 3
    }
    return answer;
}