function solution(schedules, timelogs, startday) {
    var answer = 0; // 상품 받을 직원의 수
    
    for(let i = 0; i < schedules.length; i++) {
        // i + 1번째 직원이 설정한 출근 희망 시각
        const 출근_희망_시각 = schedules[i];
        const 출근_인정_시각 = calculateTime(출근_희망_시각, 10)
        let 이벤트_성공_여부 = true;
        for(let j = 0; j < 7; j++) {
            // 월1 화2 수3 목4 금5 토6 일7
            const day = (startday + j - 1) % 7 + 1;
            if(day > 5) continue;
            // i + 1번째 직원이 이벤트 j + 1일차에 출근한 시각
            const 출근_시각 = timelogs[i][j];
            if(출근_시각 > 출근_인정_시각) {
                console.log(i, j, 출근_시각, 출근_인정_시각)
                이벤트_성공_여부 = false;
                break;
            }
        }
        if(이벤트_성공_여부) answer += 1;
    }
    
    
    return answer;
}

function calculateTime(time, delayMinute) {
    let hour = Math.floor(time / 100);
    let minute = time % 100 + delayMinute;
    if(minute >= 60) { hour += 1; minute -= 60; }
    return hour * 100 + minute;
}