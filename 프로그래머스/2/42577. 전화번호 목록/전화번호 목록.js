// O(n)
function solution(phone_book) {
    return !(phone_book.sort().some((e, i, self) => self[i + 1]?.startsWith(e)))
}