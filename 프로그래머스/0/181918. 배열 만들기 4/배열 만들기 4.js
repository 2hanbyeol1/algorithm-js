function solution(arr) {
    arr.reverse()
    const stk = [arr[0]];
    let min = arr[0];
    arr.forEach((el, idx) => {
        if (min > el) { stk.push(el); min = el; }
    }) 
    return stk.reverse();
}