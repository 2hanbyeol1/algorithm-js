function solution(video_len, pos, op_start, op_end, commands) {
    // prev -> 10초 전 (10초 미만일 때 0초로)
    // next -> 10초 후 (남은 시간 10초 미만일 때 마지막으로)
    //      -> 오프닝 건너뛰기 : 재생 위치가 오프닝 구간 op_start ~ end일 때 오프닝 끝나는 위치로 이동
    for(const command of commands) {
        if(isOpPos(pos, op_start, op_end)) pos = op_end;
        switch(command) {
            case 'next':
                pos = goNext(pos, video_len); break;
            case 'prev':
                pos = goPrev(pos); break;
        }
        if(isOpPos(pos, op_start, op_end)) pos = op_end;
    }
    return format(pos); // "mm:ss"
}
    
function isOpPos(pos, op_start, op_end) {
    if(compareTime(op_start, pos) >= 0 && compareTime(pos, op_end) >= 0) 
        return true;
    return false;
}

// time1 < time2 -> 1
// time1 = time2 -> 0
// time1 > time2 -> -1
function compareTime(time1, time2) {
    const [time1Min, time1Sec] = parseTime(time1);
    const [time2Min, time2Sec] = parseTime(time2);
    
    if(time1Min === time2Min && time1Sec === time2Sec) return 0;
    if(time1Min < time2Min) return 1;
    if(time1Min > time2Min) return -1;
    return time1Sec < time2Sec ? 1 : -1;
}

// "03:34" -> [3, 34]
function parseTime(strTime) {
    return strTime.split(':').map((num) => parseInt(num));
}

function goNext(pos, video_len) {
    let [posMin, posSec] = parseTime(pos);
    posSec += 10;
    if(posSec > 60) {
        posMin += 1; posSec -= 60;
    }
    pos = `${posMin}:${posSec}`
    if(compareTime(pos, video_len) < 0) return video_len;
    return pos;
}

function goPrev(pos) {
    let [posMin, posSec] = parseTime(pos);
    posSec -= 10;
    if(posSec < 0) {
        posMin -= 1; posSec += 60;
    }
    if(posMin < 0) return "00:00"
    return `${posMin}:${posSec}`
}

function format(pos) {
    let [posMin, posSec] = pos.split(':');
    return `${posMin.padStart(2, '0')}:${posSec.padStart(2, '0')}`
}