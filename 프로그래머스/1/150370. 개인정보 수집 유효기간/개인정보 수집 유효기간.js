function solution(today, terms, privacies) {
    var answer = [];
    const termDurations = {};
    
    for(const term of terms) {
        const [termType, termDuration] = term.split(' ');
        termDurations[termType] = termDuration;
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const [date, termType] = privacies[i].split(' ');
        if(parseDate(date) + termDurations[termType] * 28 <= parseDate(today))
            answer.push(i+1)
    }
    return answer;
}

// 일수로 변환
function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('.');
    return year * 12 * 28 + month * 28 + day * 1;
}