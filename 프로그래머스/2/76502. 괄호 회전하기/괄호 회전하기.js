// s N^2
function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        for(let j = 0; j < s.length; j++) {
            const currentCh = s[(i + j) % s.length];
            if(stack.length > 0 && match(stack[stack.length - 1], currentCh))
                stack.pop();
            else stack.push(currentCh);
        }
        if(stack.length === 0) answer++;
    }
    return answer;
}

function match(str1, str2) {
    if(str1 === '[') return str2 === ']'
    if(str1 === '{') return str2 === '}'
    if(str1 === '(') return str2 === ')'
    return false;
}