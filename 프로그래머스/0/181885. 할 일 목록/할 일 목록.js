function solution(todo_list, finished) {
    return todo_list.map((work, idx) => finished[idx] ? false : work).filter(i => i);
}