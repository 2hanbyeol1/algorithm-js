function solution(num_list) {
    let sum1 = 0
    let sum2 = 0
    num_list.forEach((e, i) => i % 2 === 0 ? sum1 += e : sum2 += e)
    return sum1 > sum2 ? sum1 : sum2;
}