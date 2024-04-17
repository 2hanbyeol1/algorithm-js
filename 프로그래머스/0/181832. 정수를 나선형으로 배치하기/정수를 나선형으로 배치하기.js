function solution(n) {
    var answer = Array.from(Array(n), ()=> Array(n).fill(0));
    var r = 0;
    var c = 0;
    var d = 0;
    
    // 우 하 좌 상
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    
    for (var i = 1; i <= n * n; i++) {
        answer[r][c] = i;
        
        const nextR = r + dr[d % 4];
        const nextC = c + dc[d % 4];
        
        if ((nextR < 0 || nextR >= n || nextC < 0 || nextC >= n) || answer[nextR][nextC] !== 0)
            d += 1;
        r += dr[d % 4];
        c += dc[d % 4];
    }
    return answer;
}