function solution(s, skip, index) {
    var answer = '';
    const skipArr = [...skip].map((ch) => ch.charCodeAt());
    
    for(const ch of s) {
        let code = ch.charCodeAt();
        for(let i = 0; i < index; i++) {
            do {
                code += 1;
                if(code > 'z'.charCodeAt()) code -= 26;
            } while(skipArr.includes(code))
        }
        answer += String.fromCharCode(code);
    }
    return answer;
}