function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i < num_list.length; i++) {
        answer.push(num_list[(i+n) % num_list.length]);
    }
    return answer;
}