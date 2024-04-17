function solution(strArr) {
    return strArr.map((ch, idx) => idx % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase())
}