function solution(priorities, location) {
    // 실행 대기 큐 q
    const q = priorities.map((p, idx) => ({p, idx})); // {p, idx} 형태로 저장
    // 프로세스 실행 횟수 cnt
    let cnt = 0;
    
    while (true) {
        // 1) q 에서 프로세스 하나 p 를 꺼냄
        const p = q.shift();
        
        // 2-1) q 에 대기 중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면, p 를 큐에 넣음
        if(q.some((pending) => pending.p > p.p)) q.push(p)
        // 2-2) 만약 그런 프로세스가 없다면,
        else {
            // 3) 프로세스 실행 -> 프로세스 실행 횟수 증가
            cnt++;
            // 3-1) 실행한 프로세스가 location에 있다면 프로세스 실행 횟수 return
            if(p.idx === location) return cnt;
        }
    }
    
}