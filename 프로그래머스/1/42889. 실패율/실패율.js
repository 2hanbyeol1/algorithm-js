// N 전체 스테이지 개수
// stages 게임 이용자의 현재 스테이지 번호
function solution(N, stages) {
    // playerCounts[s] = s번 스테이지에 있는 플레이어 수
    // failRate[s] = s번 스테이지의 실패율
    const playerCounts = new Array(N + 2).fill(0);
    const failRates = [...new Array(N + 1)].map((_, idx) => ({ s: idx, rate: 0 }));
    
    for (const stage of stages) {
        playerCounts[stage] += 1; // [0, 1, 3, 2, 1, 0, 1]
    }
    
    let prev = playerCounts[N + 1];
    for (let s = N; s > 0; s--) {
        // 실패율 = 스테이지에 도달했으나 클리어 못한 플레이어 수 / 스테이지 도달한 플레이어 수
        const totalPlayerCount = playerCounts[s] + prev;
        failRates[s] = { s, rate: playerCounts[s] / totalPlayerCount };
        prev = totalPlayerCount;
    }
    
    return failRates.slice(1).sort((a, b) => b.rate - a.rate).map((info) => info.s); // 실패율이 높은 스테이지부터 내림차순으로 정렬한 번호
}