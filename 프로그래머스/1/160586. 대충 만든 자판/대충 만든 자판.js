function solution(keymap, targets) {
    var answer = [];
    
    const map = new Map(); // 문자 - 최소 몇 번씩 눌러야 하는지
    
    for(const key of keymap) {
        for(let i = 0; i < key.length; i++) {
            const ch = key[i];
            const prev = map.get(ch);
            
            if(!prev || i < prev) {
                map.set(ch, i + 1)
            }
        }
    }
    
    for(const target of targets) {
        let min = 0;
        for(const ch of [...target]) {
            const cnt = map.get(ch);
            if(!cnt) {
                min = -1; break;
            }
            min += cnt;
        }
        answer.push(min)
    }
    return answer;
}