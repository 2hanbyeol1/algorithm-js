function solution(array) {
    if(array.length === 0) return -1;
    if(array.length === 1) return array[0];
    const count = {};
    array.forEach(a => count[a] = count[a] ? count[a] + 1 : 1);
    const [first, second] = Object.entries(count).sort((a, b) => b[1] - a[1]);
    if(!second || first[1] !== second[1]) return parseInt(first[0]);
    return -1;
}