class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    
    pop() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    bubbleUp() {
        let index = this.size() - 1; // 새로 들어온 값이 마지막 child에 담겨 있음
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[index]) break;
            this.swap(parentIdx, index);
            index = parentIdx;
        }
    }
    
    bubbleDown() {
        let index = 0; // 가장 컸던 값이 root에 담겨 있음
        while (index * 2 + 1 < this.size()) {
            let leftChildIdx = index * 2 + 1;
            let rightChildIdx = index * 2 + 2;
            let smallerChildIdx = rightChildIdx < this.size() &&
                this.heap[rightChildIdx] < this.heap[leftChildIdx]
                    ? rightChildIdx : leftChildIdx;
            
            if (this.heap[index] <= this.heap[smallerChildIdx]) break;
            this.swap(index, smallerChildIdx);
            index = smallerChildIdx;
        }
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    
    for (const s of scoville) {
        heap.push(s);
    }
    
    while (heap.size() > 0) {
        const min1 = heap.pop();
        if(min1 >= K) return answer;
        const min2 = heap.pop();
        if(min2 === null) return -1;
        heap.push(min1 + min2 * 2);
        answer++;
    }
    return -1;
}