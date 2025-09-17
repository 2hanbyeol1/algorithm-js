// 100 -> O(N^2)
// 최단 경로 -> BFS

// 방향 벡터 [U, D, R, L]
const dx = [0, 0, 1, -1];
const dy = [-1, 1, 0, 0];

function solution(maps) {
    const m = maps.length;
    const n = maps[0].length;
    
    // 0) DFS를 위해 queue, distance, visited를 초기화
    const queue = [];
    const distance = [...new Array(m)].map(() => new Array(n).fill(-1));
    const visited = new Set();
    
    // 1) 첫 방문 좌표 (0, 0)를 큐에 넣고, 거리 1을 넣어줌
    queue.push([0, 0])
    distance[0][0] = 1;
    
    // 2) 큐가 빌 때까지 반복
    while(queue.length > 0) {
        // 2-1) 큐에서 값을 꺼냄
        const [pX, pY] = queue.shift();
        
        // 2-2) 방향 벡터 4가지를 이용해 인접 좌표(nextX, nextY)를 구함
        for (let d = 0; d < 4; d++) {
            const nextX = pX + dx[d];
            const nextY = pY + dy[d];
            const coordString1 = coordToString([pX, pY], [nextX, nextY]);
            const coordString2 = coordToString([nextX, nextY], [pX, pY]);
            
            // 인접 좌표는 map을 넘을 수 없고
            if(nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) continue;
            // 벽일 수 없고
            if(maps[nextX][nextY] === 0) continue;
            // 방문한 적 없는 노드여야 함
            if(visited.has(coordString1)) continue;
            
            const prevDistance = distance[nextX][nextY];
            const newDistance = distance[pX][pY] + 1;
            
            // 4) 방문한 적 없거나, 새로운 거리값이 더 작으면 거리값을 바꿔주고 방문 처리
            if(prevDistance === -1 || prevDistance > newDistance) {
                distance[nextX][nextY] = newDistance;
                queue.push([nextX, nextY])
                visited.add(coordString1);
                visited.add(coordString2);
            }
        }
    }
    return distance[m - 1][n - 1];
}

function coordToString([x, y], [nextX, nextY]) {
    return `${x},${y},${nextX},${nextY}`
}