class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //Push method
    push(val) {
        if (!this.length) {
            this.head = new Node(val);
            this.tail = this.head; //this.tail is this.head
            this.length++;
        } else {
            this.tail.next = new Node(val); // when length = 1, this.tail here is this.head, this.tail.next = this.head.next
            this.tail = this.tail.next;
            this.length++;
        }
        return this;
    }
}

module.exports = { LinkedList, Node };
