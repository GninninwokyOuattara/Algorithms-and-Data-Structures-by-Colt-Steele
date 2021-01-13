class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Enqueue method
    enqueue(val) {
        let node = new Node(val);
        if (!this.size) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size++;
    }

    //Dequeue method
    dequeue() {
        if (!this.size) return null;
        let toBeReturned = this.first;
        this.first = this.first.next;
        toBeReturned.next = null;
        this.size--;
        return toBeReturned;
    }
}
