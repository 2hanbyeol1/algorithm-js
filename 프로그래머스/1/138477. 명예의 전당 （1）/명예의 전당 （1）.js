function solution(k, score) {
    const answer = [];
    const top = [];
    for(let i = 0; i < score.length; i++) {
        top.push(score[i]);
        top.sort((a, b) => b - a);
        answer.push(top[top.length < k ? top.length-1 : k-1])
    }
    return answer;
}