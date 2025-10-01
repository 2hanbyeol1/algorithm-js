// n 참가자 수
// a A번 참가자
// b B번 참가자
function solution(n, a, b) {
    let answer = 0;
    while(true) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
        if(a === b) return answer;
    }
}