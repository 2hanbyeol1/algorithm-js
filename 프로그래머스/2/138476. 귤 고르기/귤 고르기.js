// 수확한 귤 중 'k'개를 골라 상자 하나에 담기
function solution(k, tangerine) {
    let answer = 0;
    let count = 0;
    const tangMap = {};
    
    // 귤의 크기 별로 개수를 카운트
    for(const size of tangerine) {
        tangMap[size] = (tangMap[size] ?? 0) + 1;
    }
    
    // 개수가 적은 순으로 정렬
    const sortedTang = Object.values(tangMap).sort((a, b) => a - b);
    
    // 개수가 많은 사이즈(pop)부터 박스에 담기
    while (count < k) {
        const tCount = sortedTang.pop();
        count += tCount;
        answer += 1;
    }
    return answer; // 서로 다른 종류의 수의 최솟값
}