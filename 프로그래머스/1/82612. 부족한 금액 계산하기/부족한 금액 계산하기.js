function solution(price, money, count) {
    var answer = money - price * ((count ** 2 + count) / 2);
    return answer >= 0 ? 0 : -answer;
}