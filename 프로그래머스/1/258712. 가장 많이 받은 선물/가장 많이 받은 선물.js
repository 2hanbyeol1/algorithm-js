function solution(friends, gifts) {
    var answer = 0;
    
    const index = new Map();
    for(const idx in friends) {
        index.set(friends[idx], idx)
    }
    
    const arr = new Array(friends.length);
    for (var i = 0; i < arr.length; i++) {
        const newArr = new Array(friends.length);
        newArr.fill(0);
        arr[i] = newArr;
    }
    
    for(const gift of gifts) { // A -> B
        const [a, b] = gift.split(' ');
        arr[index.get(a)][index.get(b)] += 1;
    }
    
    const giftCount = new Array(friends.length); // idx번째 친구가 받은 선물
    giftCount.fill(0);
    
    for(var a = 0; a < arr.length; a++) {
        for(var b = 0; b < arr.length; b++) {
            if(a >= b) continue;
            // 더 많은 선물을 준 사람이 받음
            if(arr[a][b] > arr[b][a]) giftCount[a] += 1;
            else if(arr[a][b] < arr[b][a]) giftCount[b] += 1;
            // 기록이 없거나 같다면
            else {
                const giftScoreA = getGiftScore(a, arr);
                const giftScoreB = getGiftScore(b, arr);
                // 선물 지수(총 준 선물 - 총 받은 선물)가 큰 사람이 받음
                if(giftScoreA > giftScoreB) giftCount[a] += 1;
                if(giftScoreA < giftScoreB) giftCount[b] += 1;
            }
        }
    }
    
    return Math.max(...giftCount); // 받은 선물이 가장 많은 사람의 선물 수
}

function getGiftScore(friendIdx, arr) {
    let score = 0;
    for(let i = 0; i < arr.length; i++) {
        score += arr[friendIdx][i]
        score -= arr[i][friendIdx]
    }
    return score;
}