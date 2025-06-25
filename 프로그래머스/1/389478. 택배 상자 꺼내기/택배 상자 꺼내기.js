// n개의 택배 상자
// w줄씩 놓기
// num : 꺼내려는 택배 상자

// 꺼내려면 위에 있는 상자를 다 꺼내야 함
function solution(n, w, num) {
    let 홀수층_여부 = (num - 1) % (w * 2) < w;
    const 왼쪽에서_몇번째 = 홀수층_여부 ? (num - 1) % (w * 2) : 2 * w - (num - 1) % (w * 2) - 1;
    let currentNum = num;
    let count = 1;
    console.log(홀수층_여부, 왼쪽에서_몇번째)
    while(true) {
        const 바로_위에_있는_번호 = currentNum + (홀수층_여부 ? 2 * w - 왼쪽에서_몇번째 * 2 - 1 : 2 * 왼쪽에서_몇번째 + 1);
        console.log(currentNum, 바로_위에_있는_번호)
        if(바로_위에_있는_번호 > n) return count;
        홀수층_여부 = !홀수층_여부;
        currentNum = 바로_위에_있는_번호;
        count++;
    }
}