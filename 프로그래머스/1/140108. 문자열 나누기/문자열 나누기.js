function solution(s) {
    var answer = 0;
    for(let i = 0; i < s.length; i++) {
        const x = s[i];
        let xCnt = 1;
        let nCnt = 0;
        while(xCnt !== nCnt) {
            const ch = s[++i];
            ch === x ? xCnt++ : nCnt++;
            console.log(ch, xCnt, nCnt)
        }
        answer++;
    }
    return answer;
}