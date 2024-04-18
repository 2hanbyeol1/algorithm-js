function solution(rank, attendance) {
    rank = rank.map((r, i) => ({i: i, r: r}));
    rank = rank.filter((r, i) => attendance[i]).sort((a, b) => a['r'] - b['r']);
    const a = rank[0]['i']; const b = rank[1]['i']; const c = rank[2]['i'];
    return 10000 * a + 100 * b + c;
}