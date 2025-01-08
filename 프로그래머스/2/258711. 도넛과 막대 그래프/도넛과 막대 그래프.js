function solution(edges) {
    var answer = [0, 0, 0, 0];
    
    const result = {};
    edges.forEach(([a, b]) => {
        result[a] = { send: 0, receive: 0 };
        result[b] = { send: 0, receive: 0 };
    });
    
    for(const [a, b] of edges) {
        result[a].send += 1;
        result[b].receive += 1;
    }
    
    let totalEdges = 0;
    for(const vertex in result) {
        const sendCount = result[vertex].send;
        const receiveCount = result[vertex].receive;
        if(sendCount >= 2 && receiveCount === 0) {
            answer[0] = parseInt(vertex);
            totalEdges = sendCount;
        }
        else if(sendCount === 0) answer[2] += 1;
        else if(sendCount >= 2 && receiveCount >= 2) answer[3] += 1;
    }
    answer[1] = totalEdges - answer[2] - answer[3];
    
    return answer;
}