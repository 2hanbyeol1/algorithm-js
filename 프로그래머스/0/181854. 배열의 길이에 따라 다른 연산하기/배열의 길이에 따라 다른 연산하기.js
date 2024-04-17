function solution(arr, n) {
    const mod = arr.length % 2 === 0 ? 1 : 0
    
    return arr.map((a, i) => {
        if(i % 2 === mod) return a + n
        return a
    })
}