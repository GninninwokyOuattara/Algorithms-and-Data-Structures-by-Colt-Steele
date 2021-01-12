class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Push method
    push(val) {
        let newNode = new Node(val);
        newNode.prev = this.tail;
        if (!this.length) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Pop method
    pop() {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }
        let prev = this.tail.prev;
        prev.next = null;
        let deleted = this.tail;
        deleted.prev = null;
        this.tail = prev;
        this.length--;
        return deleted;
    }
}

module.exports = { DoublyLinkedList };
