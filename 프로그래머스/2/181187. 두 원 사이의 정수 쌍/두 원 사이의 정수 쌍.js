function solution(r1, r2) {
    var answer = 0;
    
    // y = x 인 점
    const intersectionPoint1 = Math.sqrt(r1 ** 2 / 2)
    const intersectionPoint2 = Math.sqrt(r2 ** 2 / 2)
    const yx = Math.floor(intersectionPoint2) - Math.floor(intersectionPoint1);
    
    // y = 0 인 점
    const y0 = r2 - r1 + 1;
    
    // 0 < y < x 인 점
    for(let x = Math.ceil(intersectionPoint1); x < r2; x++) {
        if(x < r1) {
            const intersectionPointY1 = Math.sqrt(r1 ** 2 - x ** 2);
            answer += x - Math.ceil(intersectionPointY1);
            continue;
        }
        if(x > intersectionPoint2) {
            const intersectionPointY2 = Math.sqrt(r2 ** 2 - x ** 2);
            answer += Math.floor(intersectionPointY2);
            continue;
        }
        answer += x - 1;
    }
    
    return answer * 8 + y0 * 4 + yx * 4;
}