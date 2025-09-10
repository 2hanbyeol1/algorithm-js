function solution(s){
    // 0) stack 스택 생성
    const stack = [];
    
    // 1) word 반복 - s 각 문자
    for(const word of s) {
        // 2-1) word가 "(" 일 때, stack 에 값 push
        if (word === "(") stack.push(word);
        // 2-2) word가 ")" 일 때,
        // stack에 값이 없으면 (ex. "())))"), false
        else if (stack.length === 0) return false;
        // stack 에서 값 pop
        else stack.pop();
    }

    // 3) 반복이 끝났는데, stack에 값이 있으면 false, 없으면 true
    return stack.length === 0;
}