// 마을 개수 N : 1 이상 50 이하
// 도로 정보 road의 길이: 1 이상 2000 이하
// a <-> b (가중치 c)
function solution(N, road, K) {
    let answer = 0;
    const distance = [...new Array(N + 1)].fill(Infinity); // distance[T] = 마을 T까지 배달하는데 걸리는 최소 시간
    const visited = new Set();
    const adjacentRoad = [...new Array(N + 1)].map(() => new Array());
    
    // 0) 인접 배열로 변경
    for([a, b, c] of road) {
        adjacentRoad[a].push([b, c]);
        adjacentRoad[b].push([a, c]); // 양방향
    }
    
    // 1) distance[출발 노드] = 0
    // 출발 노드 방문 처리
    distance[1] = 0;
    
    // 2) N - 1 만큼 반복
    for (let i = 0; i < N - 1; i++) {
        // 3-1) 방문하지 않은 노드 중 현재까지 구한 최소 비용이 가장 적은 노드 선택
        let shortestDistance = Infinity;
        let currentNode = null;
        for(let j = 1; j <= N; j++) { // j번 노드 2 ~ N
            if (!visited.has(j) && distance[j] <= shortestDistance) {
                shortestDistance = distance[j];
                currentNode = j;
            }
        }
        
        // 3-2) 방문 시작
        visited.add(currentNode);
        for ([adjacentNode, w] of adjacentRoad[currentNode]) {
            const distThroughCurNode = distance[currentNode] + w;
            if(distThroughCurNode < distance[adjacentNode]) {
                distance[adjacentNode] = distThroughCurNode;
            }
        }
    }
    
    return distance.filter((d) => d <= K).length; // K 이하의 시간에 배달이 가능한 마을의 개수
}