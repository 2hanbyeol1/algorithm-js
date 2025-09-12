// 1) 시간 복잡도: 최대 10^4 문제 -> O(NlogN)
function solution(answers) {
    const supoja = [
        [],
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]; // supoja[s][i % s.length] = s번 수포자가 쓴 i번 문제의 답
    const scores = [0, 0, 0, 0]; // score[s] = s번 수포자가 맞춘 정답 횟수
    for (let i = 0; i < answers.length; i++) {
        for (let s = 1; s <= 3; s++) {
            if(supoja[s][i % supoja[s].length] === answers[i]) scores[s] += 1;
        }
    }
    const maxScore = Math.max(...scores);
    const retVal = [];
    scores.slice(1, 4).forEach((score, idx) => {
        if (score === maxScore) retVal.push(idx + 1); // 가장 많은 문제를 맞힌 사람
    })
    return retVal;
}