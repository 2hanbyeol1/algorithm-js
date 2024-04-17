function solution(todo_list, finished) {
    return todo_list.filter((work, idx) => !finished[idx]);
}