function solution(n, lost, reserve) {
    let lost_filter, reserve_filter;
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
    // 다른 학생에게는 체육복을 빌려줄 수 없습니다.
    lost_filter = lost.filter(l => !reserve.includes(l)).sort((a, b) => a-b)
    reserve_filter = reserve.filter(r => !lost.includes(r)).sort((a, b) => b-a) // 숫자가 큰 학생에게 빌리는게 우선
    
    // 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
    for(var i = lost_filter.length-1; i >= 0; i--) {
        const l = lost_filter[i]
        idx = reserve_filter.findIndex(r => r === l-1 || r === l+1)
        console.log(lost_filter, reserve_filter)
        if(idx >= 0) {
            console.log('can borrow')
            lost_filter.splice(i, 1)
            reserve_filter.splice(idx, 1)
        }
        console.log(l, idx, lost_filter, reserve_filter)
    }
    return n - lost_filter.length;
}