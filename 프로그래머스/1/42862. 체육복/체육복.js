function solution(n, lost, reserve) {    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우,
    // 다른 학생에게는 체육복을 빌려줄 수 없음
    const losts = lost
        .filter((l) => !reserve.includes(l))
        .sort((a, b) => a - b);
    const reserves = reserve
        .filter((r) => !lost.includes(r))
        .sort((a, b) => a - b);
    
    return n - losts.filter((l) => {
        const idx = reserves.findIndex((r) => Math.abs(r - l) === 1);
        const hasReserve = idx >= 0;
        if(hasReserve) reserves.splice(idx, 1);
        return !hasReserve;
    }).length;
}