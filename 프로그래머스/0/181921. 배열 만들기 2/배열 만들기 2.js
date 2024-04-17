function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        if (String(i).split('').every(e => e === '5' || e === '0')) answer.push(i);
    }
    return answer.length === 0 ? [-1] : answer;
}