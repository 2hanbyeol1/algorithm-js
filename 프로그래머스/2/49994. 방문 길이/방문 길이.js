const dx = { L: -1, R: 1, U: 0, D: 0 };
const dy = { U: 1, D: -1, L: 0, R: 0 };

// N <= 500
// O(N^3)
function solution(dirs) {
    const visited = new Set(); // (x, y)의 방문 여부를 표시
    let length = 0; // 처음 걸어본 길의 길이
    let current = [0, 0]; // 현재 (x, y) 좌표
    
    for(const d of dirs) {
        const next = [current[0] + dx[d], current[1] + dy[d]];
        
        // 좌표 평면의 경계를 넘어가는 명령어는 무시
        if(Math.abs(next[0]) > 5 || Math.abs(next[1]) > 5) continue;
        
        const pathString = coordToString(current, next);
        const reversePathString = coordToString(next, current);
        current = next;
        
        // 처음 걸어본 길인 경우,
        if(!visited.has(pathString)) {
            length += 1;
            visited.add(pathString);
            visited.add(reversePathString);
        }
    }
    return length;
}

function coordToString([curX, curY], [nextX, nextY]) {
    return `${curX}, ${curY}, ${nextX}, ${nextY}`
}