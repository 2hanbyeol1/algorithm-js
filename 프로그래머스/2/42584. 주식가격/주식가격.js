function solution(prices) {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let count = 0;
        for (let j = i + 1; j < prices.length; j++) {
            count++;
            if (prices[i] > prices[j]) break;
        }
        answer.push(count);
    }
    return answer; // 가격이 떨어지지 않은 기간
}