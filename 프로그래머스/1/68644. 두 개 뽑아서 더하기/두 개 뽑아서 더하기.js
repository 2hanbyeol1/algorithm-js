function solution(numbers) {
    // 1) 서로 다른 인덱스의 두 수를 뽑아 더한 합을 담을 배열
    const sum = [];
    
    // 2) 서로 다른 인덱스를 뽑음
    // 2-1) i 반복 - 0 ~ numbers.len - 1
    // 2-2) j 반복 - i + 1 ~ numbers.len
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            // 3) 각 인덱스에 있는 두 수의 합을 합 배열에 넣음
            sum.push(numbers[i] + numbers[j]);
        }
    }
    
    // 5) 합 배열의 중복 제거
    // 6) 합 배열을 오름차순으로 담아 return
    return [...new Set(sum)].sort((a, b) => a - b);
}