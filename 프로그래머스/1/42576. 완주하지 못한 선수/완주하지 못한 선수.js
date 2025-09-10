// 시간 복잡도 -> O(N^2) 불가능

// participant 참여 마라톤 선수
// completion  완주 마라톤 선수
function solution(participant, completion) {
    // 참여 마라톤 선수 - 몇 명
    const cnt = new Map();
    for (const p of participant) {
        cnt.set(p, (cnt.has(p) ? cnt.get(p) + 1 : 1));
    }
        
    for (const c of completion) {
        // 완주자 c의 cnt를 1 줄임
        cnt.set(c, cnt.get(c) - 1);
    }
    
    return [...cnt].find((a) => a[1] > 0)[0]; // 완주하지 못한 선수의 이름
}