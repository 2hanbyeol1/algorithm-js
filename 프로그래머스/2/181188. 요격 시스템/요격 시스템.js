function solution(targets) {
    var answer = 1;
    targets.sort((a, b) => a[1] - b[1]);
    let s = targets[0][0], e = targets[0][1];
    for(let i = 1; i < targets.length; i++) {
        const start = targets[i][0], end = targets[i][1];
        if(e <= start) {
            answer++;
            s = start; e = end;
        } else s = Math.max(s, start);
    }
    return answer;
}