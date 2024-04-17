function solution(a, b, c, d) {
    const count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };
    count[a] += 1; count[b] += 1; count[c] += 1; count[d] += 1;
    
    const nums = Object.entries(count).filter(e => e[1] > 0).sort((a, b) => b[1] - a[1]);
    const num = nums[0][1]; // 제일 많이 나온 숫자의 개수
    
    const p = nums[0] && parseInt(nums[0][0])
    const q = nums[1] && parseInt(nums[1][0])
    const r = nums[2] && parseInt(nums[2][0])
    
    switch(num) {
        case 4: return 1111 * p;
        case 3: return Math.pow(p * 10 + q, 2);
        case 2:
            if(nums.length === 2) return ((p + q) * Math.abs(p - q));
            return q * r
        default: return p
    }
}