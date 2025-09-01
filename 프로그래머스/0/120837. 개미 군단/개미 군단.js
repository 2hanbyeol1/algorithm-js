function solution(hp) {
    var answer = 0;
    for(const a of [5, 3, 1]) {
        answer += Math.floor(hp / a);
        hp %= a;
    }
    return answer;
}