// id_list 이용자의 id를 나타내는 문자열 배열
// report "이용자id 신고한id" 형태의 문자열
// k번 신고 당하면 제재

function solution(id_list, reports, k) {
    const reportUsersMap = new Map(); // 신고한 유저
    const mailCountMap = new Map(); // 메일 받은 횟수
    for(const id of id_list) {
        reportUsersMap.set(id, []);
        mailCountMap.set(id, 0);
    }
    
    const reportSet = new Set(reports); // 중복 제거 (한 유저를 여러 번 신고하면 1회로 처리)
    
    for (const report of reportSet.values()) { 
        const [userId, rUserId] = report.split(" ");
        reportUsersMap.set(rUserId, [...reportUsersMap.get(rUserId), userId])
    }
    
    for (const [rUserId, reportUsers] of reportUsersMap.entries()) {
        if(reportUsers.length >= k) {
            reportUsers.forEach((userId) => {
                mailCountMap.set(userId, mailCountMap.get(userId) + 1);
            })
        }
    }
    
    var answer = id_list.map((id) => mailCountMap.get(id));
    return answer; // id_list 담긴 id 순서대로 각 유저가 받은 결과 메일 수
}