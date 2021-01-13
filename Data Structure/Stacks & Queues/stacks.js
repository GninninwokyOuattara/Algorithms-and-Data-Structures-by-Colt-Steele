class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Add to the top of the stack
    push(val) {
        let node = new Node(val);
        if (this.first === null) {
            this.last = node;
            this.first = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this;
    }

    //Remove from the top of the array
    pop() {
        if (!this.size) return null;
        let toBeReturned = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        --this.size;
        return toBeReturned;
    }
}
