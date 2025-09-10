function solution(priorities, location) {
    var answer = 0;
    // 0) 실행 대기 큐 q
    // {p, idx} 형태로 저장
    const q = priorities.map((p, idx) => ({p, idx}));
    while (true) {
        // 1) q 에서 프로세스 하나 p 를 꺼냄
        const p = q.shift();
        // 2-1) q 에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면,
        // p 를 다시 큐에 넣습니다.
        if(!!q.find((pending) => pending.p > p.p)) q.push(p)
        // 2-2) 만약 그런 프로세스가 없다면, 방금 꺼낸 프로세스를 실행합니다.
        else {
            answer++;
            if(p.idx === location) return answer;
        }
    }
    
}