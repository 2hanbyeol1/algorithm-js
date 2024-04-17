function solution(arr, query) {    
    return query.reduce((acc, q, i) =>
                 i % 2 === 0 ? [...acc].splice(0, q+1) : [...acc].splice(q, acc.length - q), arr)
}