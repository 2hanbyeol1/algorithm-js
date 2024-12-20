function solution(bandage, health, attacks) {
    let hp = health; // 모든 공격이 끝나고 남은 체력 / 죽으면 -1
    
    const [t, x, y] = bandage;
    
    hp -= attacks[0][1] // 첫 공격
    
    for(let i = 1; i < attacks.length; i++) {        
        const [time, damage] = attacks[i]; // 공격 시간, 피해량
        const prevTime = attacks[i-1][0];
        
        const duration = time - prevTime - 1; // 회복 기간 (초)
        // 초당 회복 + 추가 회복 (연속 성공)
        const heal = duration * x + (Math.floor(duration / t) * y);
        // 최대 체력보다 커질 수는 없음
        if(hp + heal >= health) hp = health;
        else hp += heal;
        
        // 공격 -> 데미지 만큼 체력 빼기
        hp -= damage;
        
        // 체력 0이면 죽음 (회복 불가)
        if(hp <= 0) return -1;
    }
    return hp;
}