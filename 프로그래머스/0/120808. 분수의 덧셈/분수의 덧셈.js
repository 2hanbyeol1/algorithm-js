function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    
    const fGCD = (a, b) => a % b === 0 ? b : fGCD(b, a % b);
    const gcd = fGCD(numer, denom);
    
    return [numer / gcd, denom / gcd];
}