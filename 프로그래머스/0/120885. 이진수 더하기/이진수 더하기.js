// 이진수를 의미하는 두 개의 문자열
function solution(bin1, bin2) {
    var answer = '';
    let maxLength = Math.max(bin1.length, bin2.length);
    
    bin1 = bin1.padStart(maxLength, "0");
    bin2 = bin2.padStart(maxLength, "0");
    
    let isCeil = false;
    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(bin1[i]) + parseInt(bin2[i]) + (isCeil ? 1 : 0);
        if (sum >= 2) {
            isCeil = true;
            sum -= 2;
        } else isCeil = false;
        answer += sum;
    }
    if(isCeil) answer += "1"
    return [...answer].reverse().join("");
}