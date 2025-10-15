const code = {
    A: 'A'.charCodeAt(),
    Z: 'Z'.charCodeAt(),
};

function solution(name) {
    let answer = 0;

    // 1) 각 문자를 만드는 데 필요한 조작 횟수 계산
    for (const ch of name) {
        const up = ch.charCodeAt() - code.A;
        const down = code.Z - ch.charCodeAt() + 1;
        answer += Math.min(up, down);
    }

    // 2) 커서 이동 최소 횟수 계산
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        // 연속된 A 구간 찾기
        while (next < name.length && name[next] === 'A') next++;

        // 커서 이동 최소화 (왼쪽으로 되돌아가는 경우 고려)
        move = Math.min(
            move,
            i * 2 + (name.length - next), // 오른쪽 → 왼쪽 되돌기
            (name.length - next) * 2 + i  // 왼쪽으로 갔다가 오른쪽 가기
        );
    }

  return answer + move;
}